import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import { IoIosArrowBack } from "react-icons/io";
import DescriptionContainer from "../Components/Rental/DescriptionContainer";
import SearchContainer from "../Components/Rental/SearchContainer";

const Rental = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BurgerNavbar color={"#FFFFFF"} />
      <div className="min-h-screen w-screen">
        <div className="px-4 lg:px-[10vw]">
          <img
            src="./Rental/Room.png"
            alt="room"
            className="w-screen h-full pt-20 md:hidden"
          />

          <img
            src="./Rental/RoomDesktop.png"
            alt="room"
            className="hidden pt-20 md:block w-full"
          />
          <div className="flex flex-row justify-center gap-x-5 -mt-10 items-center">
            <IoIosArrowBack className="mt-5 cursor-pointer lg:text-2xl 2xl:text-4xl" />
            <div className="w-20 h-20 lg:w-32 lg:h-32 border-[3px] border-[#FF6241] rounded-xl bg-[url('./Rental/Room.png')] bg-center bg-no-repeat bg-cover"></div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 border-[3px] border-white rounded-xl bg-[url('./Rental/Room.png')] bg-center bg-no-repeat bg-cover"></div>
            <IoIosArrowBack className="rotate-180 mt-5 cursor-pointer lg:text-2xl 2xl:text-4xl" />
          </div>
        </div>

        <div className="flex flex-col w-screen h-fit py-32 px-4 lg:px-[10vw] lg:flex-row gap-y-20 lg:gap-x-5">
          <DescriptionContainer />
          <SearchContainer />
        </div>

        <h1 className="font-SolidenTrialBoldExpanded text-xl lg:text-2xl lg:px-[10vw] px-4">
          See what guests liked the most:
        </h1>

        <div className="w-screen md:w-1/2 h-fit px-4 md:pr-12 lg:px-[10vw] pt-4 pb-20">
          <div className="w-full h-fit bg-white drop-shadow-2xl rounded-xl p-5">
            <h1 className="font-SolidenTrialBoldExpanded text-lg">
              James Torff
            </h1>
            <h1 className="font-SolidenTrialRegular text-xs pb-2">Bulgaria</h1>

            <h1 className="font-SolidenTrialRegular">
              "Great place, it has become our favorite and we will definitely
              come back again.“
            </h1>
          </div>
        </div>

        <div className="w-screen md:w-1/2 h-fit px-4 md:pr-12 lg:px-[10vw] pt-4 pb-20">
          <div className="w-full h-fit bg-white drop-shadow-2xl rounded-xl p-5">
            <h1 className="font-SolidenTrialBoldExpanded text-lg">
              James Torff
            </h1>
            <h1 className="font-SolidenTrialRegular text-xs pb-2">Bulgaria</h1>

            <h1 className="font-SolidenTrialRegular">
              "Great place, it has become our favorite and we will definitely
              come back again.“
            </h1>
          </div>
        </div>

        <div className="w-screen md:w-1/2 h-fit px-4 md:pr-12 lg:px-[10vw] pt-4 pb-20">
          <div className="w-full h-fit bg-white drop-shadow-2xl rounded-xl p-5">
            <h1 className="font-SolidenTrialBoldExpanded text-lg">
              James Torff
            </h1>
            <h1 className="font-SolidenTrialRegular text-xs pb-2">Bulgaria</h1>

            <h1 className="font-SolidenTrialRegular">
              "Great place, it has become our favorite and we will definitely
              come back again.“
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rental;
