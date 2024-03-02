import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import GallerySlider from "../Components/Rental/GallerySlider";
import DescriptionContainer from "../Components/Rental/DescriptionContainer";
import SearchContainer from "../Components/Rental/SearchContainer";
import ReviewsSection from "../Components/Rental/ReviewsSection";

const Rental = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BurgerNavbar color={"#FFFFFF"} />
      <div className="min-h-screen w-screen">
        <GallerySlider />

        <div className="flex flex-col w-screen h-fit py-32 px-4 lg:px-[10vw] lg:flex-row gap-y-20 lg:gap-x-5">
          <DescriptionContainer />
          <SearchContainer />
        </div>

        <ReviewsSection />
      </div>
    </React.Fragment>
  );
};

export default Rental;
