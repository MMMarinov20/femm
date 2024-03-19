import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import Benefit from "../Components/Apartament/Benefit";

const Apartament = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BurgerNavbar color="#FFFFFF" />
      <div className="px-4 lg:px-[10vw] 3xl:px-[15vw] flex flex-col gap-y-5 pb-20 md:flex-row md:gap-x-5 2xl:gap-x-20">
        <div className="bg-[url('C:\Users\maksm\Desktop\studio-website\client\public\Apartament\Image.svg')] w-full md:w-full h-[70vh] md:h-[60vh] xl:h-[55vh] rounded-xl bg-cover bg-center bg-no-repeat"></div>
        <div className="p-2 shadow-2xl rounded-xl w-1/2">
          <div className="border-[1px] border-[#FF6241] px-2 py-4 grid place-items-center h-full font-GilroyExtraBold gap-y-3 rounded-xl">
            <Benefit />
            <Benefit />
            <Benefit />
            <Benefit />
            <Benefit />
            <Benefit />
            <Benefit />
            <Benefit />
            <Benefit />
            <Benefit />
            <Benefit />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Apartament;
