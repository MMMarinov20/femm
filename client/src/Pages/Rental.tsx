import React, { useEffect, useState, Suspense } from "react";
const Navbar = React.lazy(() => import("../Components/Home/Navbar/Navbar"));
const BurgerNavbar = React.lazy(
  () => import("../Components/Home/Navbar/BurgerNavbar")
);
const GallerySlider = React.lazy(
  () => import("../Components/Rental/GallerySlider")
);
const DescriptionContainer = React.lazy(
  () => import("../Components/Rental/DescriptionContainer")
);
const SearchContainer = React.lazy(
  () => import("../Components/Rental/SearchContainer")
);
const ReviewsSection = React.lazy(
  () => import("../Components/Rental/ReviewsSection")
);
const Accordion = React.lazy(() => import("../Components/Rental/Accordion"));
const FaqBox = React.lazy(() => import("../Components/Rental/FaqBox"));
const Footer = React.lazy(() => import("../Components/Home/Footer/Footer"));
const Availability = React.lazy(
  () => import("../Components/Rental/Availability")
);
import { DateRange } from "react-day-picker";
import { IconType } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "react-router-dom";
import { IRentalPage } from "../data/Interfaces/IRentalPage";
import LoadingSpinner from "../Components/LoadingSpinner";
import { INavbarData } from "../data/Interfaces/INavbarData";

interface RentalData {
  Id: number;
  Title: string;
  Location: string;
  Features: { Icon: IconType; Feature: string }[][];
  Description: string;
  Rating: number;
  Surroundings: {
    [key: string]: { Title: string; Distance: string }[];
  };
  Showcase: {
    Title: string;
    Icon: IconType;
  }[];
  Faq: {
    Question: string;
    Answer: string;
  }[];
}

export interface ReservationData {
  range: DateRange | undefined;
  adults: number;
}

const Rental = () => {
  const [searchParams] = useSearchParams();
  const [pageLangData, setPageLangData] = useState<IRentalPage | null>(null);
  const [navbarData, setNavbarData] = useState<INavbarData | null>(null);

  useEffect(() => {
    const loadRentalData = async () => {
      try {
        const id = parseInt(window.location.pathname.split("/")[2]);
        const RentalModule = await import(
          `../data/lang/${searchParams.get("lang")}/Rental/Rental.json`
        );
        const currentRental = await import(
          `../data/lang/${searchParams.get("lang")}/Rental/rentals.ts`
        );

        const NavbarModule = await import(
          `../data/lang/${searchParams.get("lang")}/Navbar/navbar.json`
        );

        const rental = currentRental.default.rentals.find(
          (rental: any) => rental.Id === id
        );

        setNavbarData(NavbarModule.default);
        setPageLangData(RentalModule.default);
        setData(rental);
      } catch (error) {
        console.error("Error loading the Rental data:", error);
      }
    };

    loadRentalData();
  }, [searchParams]);

  const [data, setData] = useState<RentalData>({
    Id: 0,
    Title: "",
    Location: "",
    Features: [],
    Description: "",
    Rating: 0,
    Surroundings: {},
    Showcase: [],
    Faq: [],
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
  }, []);

  if (!pageLangData || !data || !navbarData) return <LoadingSpinner />;

  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="overflow-hidden">
          <Navbar Data={navbarData} />
          <BurgerNavbar Data={navbarData} color={"#FFFFFF"} />
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
              Title={data.Title}
              Location={data.Location}
              Features={data.Features}
              Description={data.Description}
              Grade={pageLangData.DescriptionContainer.Grade}
              Showcase={data.Showcase}
              Rating={data.Rating}
              Footer={pageLangData.DescriptionContainer.Footer}
              ButtonText={pageLangData.DescriptionContainer.Button}
            />
            <SearchContainer
              setReservationData={receiveReservationData}
              Data={pageLangData.SearchContainer}
            />
          </div>

          <ReviewsSection
            heading={pageLangData.Reviews.Heading}
            rentalId={data.Id}
            name={data.Title}
            Data={pageLangData.ReviewContainer}
          />

          <Availability
            date={reservationData.range}
            adults={reservationData.adults}
            Data={pageLangData.Availability}
          />

          <h1
            className="font-SolidenTrialBoldExpanded text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:px-[10vw] px-4"
            data-aos="fade-right"
          >
            {pageLangData.Surroundings.Heading}
          </h1>

          <div
            className="w-screen grid grid-rows-6 md:grid-rows-2 md:grid-cols-3 lg:px-[10vw] pb-20"
          >
            {Object.keys(data.Surroundings).map((key, index) => (
              <Accordion
                key={index}
                Title={key}
                Surrounding={data.Surroundings[key]}
              />
            ))}
          </div>

          <div className="w-screen lg:px-[10vw] bg-[#F9F2DF] py-20">
            <h1
              dangerouslySetInnerHTML={{ __html: pageLangData.FAQ.Heading }}
              className="overflow-hidden text-[#464646] text-center text-2xl min-[400px]:text-3xl md:text-4xl xl:text-5xl font-SolidenTrialBoldExpanded"
              data-aos="fade-right"
            ></h1>
            {data.Faq.map((faq, index) => (
              <FaqBox key={index} Question={faq.Question} Answer={faq.Answer} />
            ))}
          </div>

          <Footer />
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default Rental;
