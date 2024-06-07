import React, { useEffect, useState } from "react";
import { getBookingById } from "../services/bookingService";
import { Link } from "react-router-dom";
import { Booking } from "../models/Booking";
import { apiService } from "../services/apiService";
import { ISuccessPage } from "../data/Interfaces/ISuccessPage";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
const Success = () => {
  const [searchParams] = useSearchParams();
  const [pageLangData, setPageLangData] = useState<ISuccessPage>({
    Title: "Loading...",
    SubTitle: "Loading...",
    Id: "Loading...",
    RentalName: "Loading...",
    Location: "Loading...",
    StartDate: "Loading...",
    EndDate: "Loading...",
    NumberOfNights: 0,
    NumberOfPeople: 0,
    PaymentMethod: "Loading...",
    HomeButton: "Loading...",
    OrderButton: "Loading...",
  });

  const [rentalName, setRentalName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [booking, setBooking] = useState<Booking | undefined>(undefined);

  useEffect(() => {
    const loadData = async () => {
      const SuccessModule = await import(
        `../data/lang/${searchParams.get("lang")}/Success/Success.json`
      );

      setPageLangData(SuccessModule.default);
    };
    loadData();
  }, [searchParams]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const bookingId = window.location.pathname.split("/").pop();
        if (bookingId) {
          const res = await getBookingById(bookingId);
          const res2 = await apiService.get(`/rentals/${res.rentalId}`);
          setRentalName(res2.title);
          setLocation(res2.location);
          setBooking(res);
        }
      } catch (error) {
        window.location.href = "/error";
        return;
      }
    };

    fetchBookingData();
  }, []);

  if (!booking) {
    return <LoadingSpinner />;
  }

  return (
    <React.Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-SolidenTrialBoldExpanded text-gray-900">
              {pageLangData.Title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 font-SolidenTrialExpanded">
              {pageLangData.SubTitle}
            </p>
          </div>
          <ul className="mt-6 space-y-4">
            <li className="flex justify-between">
              <span className="font-medium text-gray-900 font-SolidenTrialRegular">
                {pageLangData.Id}
              </span>
              <span className="text-gray-700 font-GilroyRegular">
                {booking.id}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-900 font-SolidenTrialRegular">
                {pageLangData.RentalName}
              </span>
              <span className="text-gray-700 font-SolidenTrialRegular">
                {rentalName}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-900 font-SolidenTrialRegular">
                {pageLangData.Location}
              </span>
              <span className="text-gray-700 font-SolidenTrialRegular">
                {location}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-900 font-SolidenTrialRegular">
                {pageLangData.StartDate}
              </span>
              <span className="text-gray-700 font-GilroyRegular">
                {new Date(booking.startDate).toLocaleDateString()}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-900 font-SolidenTrialRegular">
                {pageLangData.EndDate}
              </span>
              <span className="text-gray-700 font-GilroyRegular">
                {new Date(booking.endDate).toLocaleDateString()}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-900 font-SolidenTrialRegular">
                {pageLangData.NumberOfNights}
              </span>
              <span className="text-gray-700 font-GilroyRegular">
                {Math.floor(
                  (new Date(booking.endDate).getTime() -
                    new Date(booking.startDate).getTime()) /
                    (1000 * 60 * 60 * 24)
                )}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-900 font-SolidenTrialRegular">
                {pageLangData.NumberOfPeople}
              </span>
              <span className="text-gray-700 font-GilroyRegular">
                {booking.adults}
              </span>
            </li>

            <li className="flex justify-between">
              <span className="font-medium text-gray-900 font-SolidenTrialRegular">
                {pageLangData.PaymentMethod}
              </span>
              <span className="text-gray-700 font-SolidenTrialRegular">
                Stripe payment
              </span>
            </li>
            <div className="flex justify-center font-SolidenTrialRegular space-x-5">
              <Link to={"/"} className="w-full">
                <button className="bg-[#FF6241] border-[#FF6241] border-[1px] hover:bg-white transition-colors duration-300 text-white hover:text-[#FF6241] py-2 w-full rounded-full">
                  {pageLangData.HomeButton}
                </button>
              </Link>
              <Link to={"/"} className="w-full">
                <button className="bg-[#FF6241] border-[#FF6241] border-[1px] hover:bg-white transition-colors duration-300 text-white hover:text-[#FF6241] py-2 w-full rounded-full">
                  {pageLangData.OrderButton}
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Success;
