import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import BurgerNavbar from "./Navbar/BurgerNavbar";
import { INavbarData } from "../../data/Interfaces/INavbarData";

interface Props {
  Data: {
    Hero: string;
    SubHero: string;
    CTA1: string;
    CTA2: string;
  };
}

const Landing: React.FC<Props> = ({ Data }) => {
  const [searchParams] = useSearchParams();

  const [pageLangData, setPageLangData] = useState<INavbarData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await import(
        `../../data/lang/${searchParams.get("lang")}/Navbar/navbar.json`
      );
      setPageLangData(data.default);
    };
    loadData();
  }, [searchParams]);

  if (!pageLangData) return <LoadingSpinner />;

  return (
    <React.Fragment>
      <div className="w-screen min-h-fit bg-[#F9F3DF] lg:flex flex-col justify-between">
        <Navbar Data={pageLangData} />
        <BurgerNavbar Data={pageLangData} color={"#F9F3DF"} />
        <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start lg:justify-between lg:pl-[10vw] w-full h-full pt-16 min-[350px]:pt-10">
          <div className="max-w-[80vw] min-[350px]:max-w-xs md:max-w-xl lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
            <h1
              dangerouslySetInnerHTML={{ __html: Data.Hero }}
              className="overflow-hidden font-SolidenTrialBoldExpanded text-2xl md:text-5xl 3xl:text-6xl min-[350px]:text-3xl lg:text-5xl lg:pt-[5vh] xl:pt-[10vh]"
            ></h1>
            <h1 className="font-SolidenTrialExpanded pt-2 xl:text-lg">
              {Data.SubHero}
            </h1>

            <div className="hidden lg:flex flex-row gap-x-5">
              <button className="flex flex-row items-center justify-center w-40 h-12 mt-5 bg-transparent border-[#FF6241] border-[1px] text-[#FF6241] rounded-lg transition-colors duration-300 hover:bg-[#FF6241] hover:text-white">
                <h1 className="font-SolidenTrialExpanded text-lg">
                  {Data.CTA1}
                </h1>
              </button>
              <button className="flex flex-row items-center justify-center w-40 h-12 mt-5 bg-[#FF6241] text-white rounded-lg transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]">
                <h1 className="font-SolidenTrialExpanded text-lg">
                  {Data.CTA2}
                </h1>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center lg:w-auto pt-16 lg:pt-0">
            <img
              src="./Home/HeroBackgroundDesktop.png"
              alt="hero"
              className="lg:w-[50vw] 2xl:w-[40vw] overflow-x-hidden"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
