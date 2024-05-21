import React, { useEffect, useState, Suspense } from "react";
const Navbar = React.lazy(() => import("../Components/Home/Navbar/Navbar"));
const BurgerNavbar = React.lazy(
  () => import("../Components/Home/Navbar/BurgerNavbar")
);
const Footer = React.lazy(() => import("../Components/Home/Footer/Footer"));
const Hero = React.lazy(() => import("../Components/About/Hero"));
const WhoWeAre = React.lazy(() => import("../Components/About/WhoWeAre"));
const WhatWeDo = React.lazy(() => import("../Components/About/WhatWeDo"));
const OurMission = React.lazy(() => import("../Components/About/OurMission"));
import { useSearchParams } from "react-router-dom";
import { AboutInterface } from "../data/lang/en/About/About";
import LoadingSpinner from "../Components/LoadingSpinner";

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

  if (!aboutData) return <LoadingSpinner />;

  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </React.Fragment>
  );
};

export default About;
