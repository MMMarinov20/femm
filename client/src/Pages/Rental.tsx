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
import rentalsData from "../data/lang/en/Rental/rentals";
import Availability from "../Components/Rental/Availability";
import { DateRange } from "react-day-picker";
import { IconType } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "react-router-dom";
import { RentalInterface } from "../data/lang/en/Rental/Rental";

interface RentalData {
  id: number;
  title: string;
  location: string;
  features: { Icon: IconType; Feature: string }[][];
  description: string;
  rating: number;
  surroundings: {
    [key: string]: { title: string; distance: string }[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface ReservationData {
  range: DateRange | undefined;
  adults: number;
}

const Rental = () => {
  const [searchParams] = useSearchParams();
  const [rentalData, setRentalData] = useState<RentalInterface | null>(null);

  useEffect(() => {
    const loadRentalData = async () => {
      try {
        const RentalModule = await import(
          `../data/lang/${searchParams.get("lang")}/Rental/Rental.json`
        );
        setRentalData(RentalModule.default);
      } catch (error) {
        console.error("Error loading the Rental data:", error);
      }
    };

    loadRentalData();
  }, [searchParams]);

  const [data, setData] = useState<RentalData>({
    id: 0,
    title: "",
    location: "",
    features: [],
    description: "",
    rating: 0,
    surroundings: {},
    faq: [],
  });

  const [reservationData, setReservationData] = useState<ReservationData>({
    range: undefined,
    adults: 0,
  });

  const receiveReservationData = (data: ReservationData) => {
    setReservationData(data);
  };

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
    const id = window.location.pathname.split("/")[2];

    const rental = rentalsData.rentals.find(
      (rental) => rental.id === parseInt(id)
    );
    if (!rental) return;
    setData(rental);
  }, []);

  if (!rentalData || !data) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <Navbar />
        <BurgerNavbar color={"#FFFFFF"} />
        <GallerySlider
          src={[
            "../../Rental/Room1.jpg",
            "../../Rental/Room1.jpg",
            "../../Rental/Room1.jpg",
            "../../Rental/Room1.jpg",
            "../../Rental/Room1.jpg",
          ]}
        />
        <div className="flex flex-col w-screen h-fit pb-32 pt-10 lg:py-32 px-4 lg:px-[10vw] lg:flex-row gap-y-20 lg:gap-x-5">
          <DescriptionContainer
            title={data.title}
            location={data.location}
            features={data.features}
            description={data.description}
            rating={data.rating}
            buttonText={rentalData.DescriptionContainer.Button}
          />
          <SearchContainer
            setReservationData={receiveReservationData}
            Data={rentalData.SearchContainer}
          />
        </div>

        <ReviewsSection
          heading={rentalData.Reviews.Heading}
          rentalId={data.id}
          name={data.title}
          Data={rentalData.ReviewContainer}
        />

        <Availability
          date={reservationData.range}
          adults={reservationData.adults}
          Data={rentalData.Availability}
        />

        <h1
          className="font-SolidenTrialBoldExpanded text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:px-[10vw] px-4"
          data-aos="fade-right"
        >
          {rentalData.Surroundings.Heading}
        </h1>

        <div
          className="w-screen grid grid-rows-6 md:grid-rows-2 md:grid-cols-3 lg:px-[10vw] pb-20"
          data-aos="fade-up"
        >
          {Object.keys(data.surroundings).map((key, index) => (
            <Accordion
              key={index}
              title={key}
              surrounding={data.surroundings[key]}
            />
          ))}
        </div>

        <div className="w-screen lg:px-[10vw] bg-[#F9F2DF] py-20">
          <h1
            dangerouslySetInnerHTML={{ __html: rentalData.FAQ.Heading }}
            className="overflow-hidden text-[#464646] text-center text-2xl min-[400px]:text-3xl md:text-4xl xl:text-5xl font-SolidenTrialBoldExpanded"
            data-aos="fade-right"
          ></h1>
          {data.faq.map((faq, index) => (
            <FaqBox key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Rental;
