import React from "react";
import Landing from "../Components/Property/Landing";
import Info from "../Components/Property/Info";
import Box from "../Components/Property/Box";
import CarouselSlider from "../Components/Property/CarouselSlider";
import Properties from "../Components/Property/Properties";
import Advantage from "../Components/Property/Advantage";
import Footer from "./../Components/Home/Footer/Footer";

const Property = () => {
  return (
    <React.Fragment>
      <Landing />
      <Info />
      <div className="min-h-screen flex flex-col items-center px-4 lg:px-[10vw]">
        <h1 className="font-SolidenTrialBoldExpanded text-3xl pb-2 md:text-5xl 2xl:text-6xl">
          Facilities
        </h1>
        <h1 className="font-SolidenTrialRegular text-center md:text-xl">
          Like all complexes of Atlantis Bulgaria, the complex will provide a
          number of amenities to its customers
        </h1>

        <div className="w-full py-20 min-[350px]:px-10 grid grid-row-5 gap-y-10 place-items-center lg:grid-cols-2 xl:grid-cols-3">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>

        <div className="w-screen px-0 overflow-hidden text-center">
          <h1 className="font-SolidenTrialBoldExpanded text-3xl pb-10 md:text-5xl 2xl:text-6xl">
            Gallery
          </h1>
          <CarouselSlider />
        </div>

        <Properties />

        <div className="min-h-fit pb-20">
          <h1 className="font-SolidenTrialBoldExpanded text-3xl px-4 text-center md:text-5xl 2xl:text-6xl overflow-hidden">
            Advantages Of Your <span className="text-[#FF6241]">New</span> Home
          </h1>
          <div className="w-screen py-20 px-4 grid gap-y-10 place-items-center lg:grid-cols-2 xl:grid-cols-3">
            <Advantage />
            <Advantage />
            <Advantage />
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Property;
