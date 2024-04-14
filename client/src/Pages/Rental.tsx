import React, { useEffect, useState } from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import GallerySlider from "../Components/Rental/GallerySlider";
import DescriptionContainer from "../Components/Rental/DescriptionContainer";
import SearchContainer from "../Components/Rental/SearchContainer";
import ReviewsSection from "../Components/Rental/ReviewsSection";
import Accordion from "../Components/Rental/Accordion";
import FaqBox from "../Components/Rental/FaqBox";
import Footer from "../Components/Home/Footer/Footer";
import rentals from "../data/rentals.json";
import Availability from "../Components/Rental/Availability";
import { DateRange } from "react-day-picker";

interface RentalData {
  id: number;
  title: string;
  location: string;
  features: string[];
  description: string;
  rating: number;
  surroundings: {
    [key: string]: { building: string }[];
  };
  faq: {
    [key: string]: string;
  };
}

export interface ReservationData {
  range: DateRange;
  adults: number;
}

const Rental = () => {
  const [data, setData] = useState<RentalData>({
    id: 0,
    title: "",
    location: "",
    features: [],
    description: "",
    rating: 0,
    surroundings: {},
    faq: {},
  });

  const [reservationData, setReservationData] = useState<ReservationData>({
    range: { from: new Date(), to: new Date() },
    adults: 0,
  });

  const receiveReservationData = (data: ReservationData) => {
    setReservationData(data);
  };

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];

    const rental = rentals.rentals.find((rental) => rental.id === parseInt(id));
    if (!rental) return;

    setData(rental);
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <BurgerNavbar color={"#FFFFFF"} />
      <div className="min-h-screen w-screen">
        <GallerySlider />

        <div className="flex flex-col w-screen h-fit py-32 px-4 lg:px-[10vw] lg:flex-row gap-y-20 lg:gap-x-5">
          <DescriptionContainer
            title={data.title}
            location={data.location}
            features={data.features}
            description={data.description}
            rating={data.rating}
          />
          <SearchContainer setReservationData={receiveReservationData} />
        </div>

        <ReviewsSection />

        <Availability
          date={reservationData.range}
          adults={reservationData.adults}
        />

        <h1 className="font-SolidenTrialBoldExpanded text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:px-[10vw] px-4">
          Surroundings:
        </h1>

        <div className="w-screen grid grid-rows-6 md:grid-rows-2 md:grid-cols-3 lg:px-[10vw] pb-20">
          <Accordion surrounding={data.surroundings} />
          <Accordion surrounding={data.surroundings} />
          <Accordion surrounding={data.surroundings} />
          <Accordion surrounding={data.surroundings} />
          <Accordion surrounding={data.surroundings} />
          <Accordion surrounding={data.surroundings} />
        </div>

        <div className="w-screen lg:px-[10vw] bg-[#F9F2DF] py-20">
          <h1 className="overflow-hidden text-[#464646] text-center text-2xl min-[400px]:text-3xl md:text-4xl xl:text-5xl font-SolidenTrialBoldExpanded">
            Frequently Asked <span className="text-[#FF6241]">Questions</span>
          </h1>
          <FaqBox faq={data.faq} />
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Rental;
