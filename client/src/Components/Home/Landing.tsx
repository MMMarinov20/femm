import React from "react";
import Navbar from "./Navbar/Navbar";
import BurgerNavbar from "./Navbar/BurgerNavbar";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="w-screen min-h-fit bg-[#F9F3DF] lg:flex flex-col justify-between">
        <Navbar />
        <BurgerNavbar />
        <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start lg:justify-between lg:pl-[10vw] w-full h-full pt-16 min-[350px]:pt-10">
          <div className="max-w-[80vw] min-[350px]:max-w-xs md:max-w-xl lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
            <h1 className="overflow-hidden font-SolidenTrialBoldExpanded text-2xl md:text-5xl 3xl:text-6xl min-[350px]:text-3xl lg:text-5xl lg:pt-[5vh] xl:pt-[10vh]">
              Discover <span className="text-[#FF6241]">Ideal</span> Properties
              With Our Rental Platform
            </h1>
            <h1 className="font-SolidenTrialExpanded pt-2 xl:text-lg">
              One-of-a-kind homes and rooms for rent, in the best locations, at
              every price point.
            </h1>

            <div className="hidden lg:flex flex-row gap-x-5">
              <button className="flex flex-row items-center justify-center w-40 h-12 mt-5 bg-transparent border-[#FF6241] border-[1px] text-[#FF6241] rounded-lg transition-colors duration-300 hover:bg-[#FF6241] hover:text-white">
                <h1 className="font-SolidenTrialExpanded text-lg">Rent</h1>
              </button>
              <button className="flex flex-row items-center justify-center w-40 h-12 mt-5 bg-[#FF6241] text-white rounded-lg transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]">
                <h1 className="font-SolidenTrialExpanded text-lg">Rent</h1>
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
