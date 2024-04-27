import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import Landing from "../Components/Apartament/Landing";
import Info from "../Components/Apartament/Info";
import Advantage from "../Components/Property/Advantage";
import Facilities from "../Components/Apartament/Facilities";
import Form from "../Components/Apartament/Form";
import Footer from "../Components/Home/Footer/Footer";
const Apartament = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BurgerNavbar color="#FFFFFF" />
      <Landing />
      <Info />
      <Facilities />

      <div className="min-h-fit py-20">
        <h1 className="font-SolidenTrialBoldExpanded text-3xl px-4 text-center md:text-5xl 2xl:text-6xl overflow-hidden">
          Advantages Of Your <span className="text-[#FF6241]">New</span> Home
        </h1>
        <div className="w-screen py-20 px-4 lg:px-[10vw] grid gap-y-10 place-items-center lg:grid-cols-2 xl:flex xl:justify-between xl:gap-x-28">
          <Advantage />
          <Advantage />
          <Advantage />
        </div>
      </div>

      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default Apartament;
