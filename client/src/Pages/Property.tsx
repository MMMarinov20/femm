import React from "react";
import Landing from "../Components/Property/Landing";
import Info from "../Components/Property/Info";
import Box from "../Components/Property/Box";
import CarouselSlider from "../Components/Property/CarouselSlider";

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

        <div className="w-screen px-0 overflow-hidden">
          <CarouselSlider />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Property;
