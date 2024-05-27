import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import BurgerNavbar from "../Home/Navbar/BurgerNavbar";
import { INavbarData } from "./../../data/Interfaces/INavbarData";
import LoadingSpinner from "../LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface Props {
  Data: {
    Title: string;
    Subtitle: string;
    Description: string;
    CTA: string;
  };
}

const Landing: React.FC<Props> = ({ Data }) => {
  const [searchParams] = useSearchParams();
  const [navbarData, setNavbarData] = useState<INavbarData | null>(null);

  useEffect(() => {
    const loadNavbarData = async () => {
      try {
        const NavbarModule = await import(
          `../../data/lang/${searchParams.get("lang")}/Navbar/navbar.json`
        );
        setNavbarData(NavbarModule.default);
      } catch (error) {
        console.error("Error loading the Navbar data:", error);
      }
    };

    loadNavbarData();
  }, [searchParams]);

  if (!navbarData) return <LoadingSpinner />;

  return (
    <React.Fragment>
      <div className="bg-[#F9F2DF]">
        <Navbar Data={navbarData} />
      </div>
      <BurgerNavbar Data={navbarData} color="#F9F2DF" />
      <div className="w-screen h-[90vh] lg:h-fit lg:pl-[10vw] lg:pt-10 2xl:pt-0 bg-[#F9F2DF] flex flex-col lg:flex-row justify-between 2xl:items-center">
        <div className="px-4 pt-5 lg:px-0 lg:max-w-[20rem] xl:max-w-md 2xl:max-w-xl lg:pb-[10vw]">
          <h1 className="text-[#FF6241] font-SolidenTrialBoldExpanded text-xl min-[370px]:text-2xl md:text-3xl lg:text-2xl">
            {Data.Title}
          </h1>
          <h1 className="font-SolidenTrialBoldExpanded text-3xl min-[370px]:text-4xl min-[410px]:text-5xl md:text-6xl lg:text-5xl xl:text-6xl overflow-hidden">
            {Data.Subtitle}
          </h1>
          <h1 className="font-SolidenTrialExpanded py-3 min-[370px]:py-5 md:text-xl lg:text-base xl:text-lg 2xl:text-xl">
            {Data.Description}
          </h1>

          <button className="bg-[#FF6241] py-3 w-[80vw] min-[370px]:w-[60vw] md:w-[40vw] lg:w-[20vw] font-SolidenTrialRegular text-xs min-[370px]:text-base text-white rounded-lg">
            {Data.CTA}
          </button>
        </div>
        <LazyLoadImage
          src="../Property/Building.png"
          className="w-full lg:w-[55%]"
          alt="Building"
        />
      </div>
    </React.Fragment>
  );
};

export default Landing;
