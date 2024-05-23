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
import { IAboutPage } from "../data/Interfaces/IAboutPage";
import LoadingSpinner from "../Components/LoadingSpinner";
import { INavbarData } from "../data/Interfaces/INavbarData";

const About = () => {
  const [searchParams] = useSearchParams();
  const [pageLangData, setPageLangData] = useState<IAboutPage | null>(null);
  const [navbarData, setNavbarData] = useState<INavbarData | null>(null);

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        const AboutModule = await import(
          `../data/lang/${searchParams.get("lang")}/About/About.json`
        );
        const NavbarModule = await import(
          `../data/lang/${searchParams.get("lang")}/Navbar/navbar.json`
        );
        setNavbarData(NavbarModule.default);
        setPageLangData(AboutModule.default);
      } catch (error) {
        console.error("Error loading the About data:", error);
      }
    };

    loadAboutData();
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!pageLangData || !navbarData) return <LoadingSpinner />;

  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="overflow-hidden">
          <div className="bg-[#F9F2DF]">
            <Navbar Data={navbarData} />
          </div>
          <BurgerNavbar Data={navbarData} color="#F9F2DF" />

          <Hero Data={pageLangData.Landing} />

          <WhoWeAre Data={pageLangData.WhoWeAre} />

          <WhatWeDo Data={pageLangData.WhatWeDo} />

          <OurMission Data={pageLangData.Mission} />

          <Footer />
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default About;
