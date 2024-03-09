import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";

const Property = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F9F2DF]">
        <Navbar />
      </div>
      <BurgerNavbar color="#F9F2DF" />
      <div className="w-screen h-[90vh] lg:h-fit lg:pl-[10vw] lg:pt-10 bg-[#F9F2DF] flex flex-col lg:flex-row justify-between">
        <div className="px-4 pt-5 lg:px-0 lg:max-w-[20rem] xl:max-w-md 2xl:max-w-xl">
          <h1 className="text-[#FF6241] font-SolidenTrialBoldExpanded text-xl min-[370px]:text-2xl md:text-3xl lg:text-2xl">
            Atlantis Aria
          </h1>
          <h1 className="font-SolidenTrialBoldExpanded text-3xl min-[370px]:text-4xl min-[410px]:text-5xl md:text-6xl lg:text-5xl xl:text-6xl overflow-hidden">
            The Future of Izgrev District
          </h1>
          <h1 className="font-SolidenTrialExpanded py-3 min-[370px]:py-5 md:text-xl lg:text-base xl:text-lg 2xl:text-xl">
            One-of-a-kind homes and rooms for rent, in the best locations, at
            every price point.
          </h1>

          <button className="bg-[#FF6241] py-3 w-[80vw] min-[370px]:w-[60vw] md:w-[40vw] lg:w-[20vw] font-SolidenTrialRegular text-xs min-[370px]:text-base text-white rounded-lg">
            Call to Action
          </button>
        </div>
        <img src="./Property/Background.png" className="w-full 2xl:w-[55%]" />
      </div>
    </React.Fragment>
  );
};

export default Property;
