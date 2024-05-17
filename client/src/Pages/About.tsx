import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import Footer from "../Components/Home/Footer/Footer";
import Hero from "../Components/About/Hero";
import WhoWeAre from "../Components/About/WhoWeAre";
import WhatWeDo from "../Components/About/WhatWeDo";
import OurMission from "../Components/About/OurMission";

const About = () => {
  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <div className="bg-[#F9F2DF]">
          <Navbar />
        </div>
        <BurgerNavbar color="#F9F2DF" />

        <Hero />

        <WhoWeAre />

        <WhatWeDo />

        <OurMission />

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default About;
