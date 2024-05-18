import React, { useEffect, useState } from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import Footer from "../Components/Home/Footer/Footer";
import Hero from "../Components/About/Hero";
import WhoWeAre from "../Components/About/WhoWeAre";
import WhatWeDo from "../Components/About/WhatWeDo";
import OurMission from "../Components/About/OurMission";
import { useSearchParams } from "react-router-dom";
import { AboutInterface } from "../data/lang/en/About/About";

const About = () => {
  const [searchParams] = useSearchParams();
  const [aboutData, setAboutData] = useState<AboutInterface | null>(null);

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        const AboutModule = await import(
          `../data/lang/${searchParams.get("lang")}/About/About.json`
        );
        setAboutData(AboutModule.default);
      } catch (error) {
        console.error("Error loading the About data:", error);
      }
    };

    loadAboutData();
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <div className="bg-[#F9F2DF]">
          <Navbar />
        </div>
        <BurgerNavbar color="#F9F2DF" />

        <Hero Data={aboutData.Landing} />

        <WhoWeAre Data={aboutData.WhoWeAre} />

        <WhatWeDo Data={aboutData.WhatWeDo} />

        <OurMission Data={aboutData.Mission} />

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default About;
