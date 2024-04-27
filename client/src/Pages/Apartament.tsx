import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import Landing from "../Components/Apartament/Landing";
import Info from "../Components/Apartament/Info";
import Box from "../Components/Property/Box";
import Facilities from "../Components/Apartament/Facilities";
const Apartament = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BurgerNavbar color="#FFFFFF" />
      <Landing />
      <Info />
      <Facilities />

      <div className="text-center py-20">
        <h1 className="font-SolidenTrialBoldExpanded text-3xl pb-2 md:text-5xl 2xl:text-6xl">
          Advantages Of Your <span className="text-[#FF6241]">New</span> Home
        </h1>
        <div className="w-full flex flex-col lg:flex-row lg:gap-x-20 p-20 justify-center items-center">
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Apartament;
