import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import Benefit from "../Components/Apartament/Benefit";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Apartament = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BurgerNavbar color="#FFFFFF" />
      <div className="w-screen lg:px-[10vw]">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-center px-4 lg:px-0">
          <div className="w-full 2xl:w-[50%] h-full flex flex-col justify-between">
            <div className="bg-[url('../Apartament/Image.svg')] w-full h-[70vh] md:h-[60vh] xl:h-[55vh] rounded-xl bg-cover bg-center bg-no-repeat"></div>
            <div className="flex justify-center items-center gap-x-3 mt-5">
              <IoIosArrowBack className="text-3xl" />
              <div className="w-20 h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-[url('../Apartament/Image.svg')] bg-center bg-cover bg-no-repeat rounded-xl"></div>
              <div className="w-20 h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-[url('../Apartament/Image.svg')] bg-center bg-cover bg-no-repeat rounded-xl"></div>
              <div className="w-20 h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-[url('../Apartament/Image.svg')] bg-center bg-cover bg-no-repeat rounded-xl"></div>
              <IoIosArrowForward className="text-3xl" />
            </div>
          </div>

          <div className="w-full xl:w-[70%] 2xl:w-[30%] flex flex-col justify-between items-center px-7 lg:px-10">
            <div className="p-2 md:h-[60vh] xl:h-[55vh] rounded-xl w-full md:w-1/2 lg:w-full shadow-2xl">
              <div className="border-[1px] border-[#FF6241] px-2 py-4 grid place-items-center h-full w-full font-GilroyExtraBold gap-y-3 rounded-xl">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <Benefit key={item} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-y-3 w-full justify-center items-center mt-5">
              <button className="font-SolidenTrialExpanded bg-[#FF6241] rounded-lg py-3 text-white text-xs w-[90%]">
                Download Property Presentation
              </button>
              <button className="font-SolidenTrialExpanded bg-[#FF6241] rounded-lg py-3 text-white text-xs w-[90%]">
                Download Property Presentation
              </button>
              <button className="font-SolidenTrialExpanded bg-[#FF6241] rounded-lg py-3 text-white text-xs w-[90%]">
                Download Property Presentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Apartament;
