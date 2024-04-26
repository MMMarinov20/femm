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
      <div className="px-4 lg:px-[10vw] 3xl:px-[15vw] flex flex-col gap-y-5 pb-20 md:flex-row justify-center items-center md:gap-x-5 2xl:gap-x-20">
        <div className="bg-[url('C:\Users\maksm\Desktop\studio-website\client\public\Apartament\Image.svg')] w-full h-[70vh] md:h-[60vh] xl:h-[55vh] rounded-xl bg-cover bg-center bg-no-repeat"></div>
        <div>
          <div className="flex flex-row gap-x-3 items-center justify-center">
            <IoIosArrowBack className="cursor-pointer lg:text-2xl 2xl:text-4xl" />
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className={`w-20 h-20 lg:w-32 lg:h-32 border-[3px] border-[#FF6241] rounded-xl bg-[url('C:\\Users\\maksm\\Desktop\\studio-website\\client\\public\\Apartament\\Image.svg')] bg-center bg-no-repeat bg-cover ${"border-[#FF6241] rounded-xl"}`}
              ></div>
            ))}

            <IoIosArrowForward className="cursor-pointer lg:text-2xl 2xl:text-4xl" />
          </div>
        </div>
        <div className="p-2 shadow-2xl rounded-xl w-[90%] md:w-1/2">
          <div className="border-[1px] border-[#FF6241] px-2 py-4 grid place-items-center h-full w-full font-GilroyExtraBold gap-y-3 rounded-xl">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Benefit key={item} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Apartament;
