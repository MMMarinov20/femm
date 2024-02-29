import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import { IoIosArrowBack } from "react-icons/io";
import DescriptionContainer from "../Components/Rental/DescriptionContainer";
import { FaLocationDot } from "react-icons/fa6";

const Rental = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BurgerNavbar color={"#FFFFFF"} />
      <div className="min-h-screen w-screentext-2xl">
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

        <div className="flex flex-col w-screen h-fit py-20 px-4 lg:px-[10vw] lg:flex-row gap-y-20 lg:gap-x-5">
          <DescriptionContainer />

          <div className="w-full lg:w-[60%] h-fit bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-2xl p-5 flex flex-col md:text-lg">
            <h1 className="font-GilroyBold text-2xl md:text-4xl overflow-hidden">
              Search
            </h1>
            <h1 className="font-GilroyRegular">
              Name of destination / place of accommodation.
            </h1>

            <div className="flex flex-col gap-y-5 pt-3">
              <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
                <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
                <input
                  placeholder="Search"
                  className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
                />
              </div>
              <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
                <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
                <input
                  placeholder="Search"
                  className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
                />
              </div>
              <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
                <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
                <input
                  placeholder="Search"
                  className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
                />
              </div>
              <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
                <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
                <input
                  placeholder="Search"
                  className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
                />
              </div>
            </div>

            <div>
              <input type="checkbox" className="mt-5" />
              <label className="font-GilroyRegular pl-2">
                I agree to the terms and conditions.
              </label>
            </div>

            <button className="w-full bg-[#FF6241] py-3 text-white font-GilroyRegular rounded-lg text-xs mt-2 md:text-base">
              Search
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rental;
