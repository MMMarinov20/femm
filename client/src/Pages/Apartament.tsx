import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import Landing from "../Components/Apartament/Landing";
import Info from "../Components/Apartament/Info";
import Advantage from "../Components/Property/Advantage";
import Form from "../Components/Apartament/Form";
import Footer from "../Components/Home/Footer/Footer";
import Box from "../Components/Property/Box";

const Apartament = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BurgerNavbar color="#FFFFFF" />
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

        <div className="min-h-fit pb-20">
          <h1 className="font-SolidenTrialBoldExpanded text-3xl px-4 text-center md:text-5xl 2xl:text-6xl overflow-hidden">
            Advantages Of Your <span className="text-[#FF6241]">New</span> Home
          </h1>
          <div className="w-screen py-20 px-4 lg:px-[10vw] flex flex-col gap-y-10 items-center lg:flex-row lg:gap-x-10 xl:gap-x-20 2xl:gap-x-32">
            <Advantage />
            <Advantage />
            <Advantage />
          </div>
        </div>
      </div>

      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default Apartament;
