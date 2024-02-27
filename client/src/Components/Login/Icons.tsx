import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Icons = () => {
  return (
    <React.Fragment>
      <div className="flex items-center md:w-1/2 lg:w-8/12 justify-center my-3">
        <hr className="w-[45%] border-[#464646] border-[1px]" />
        <h1 className="text-[#464646] text-xs 2xl:text-lg font-SolidenTrialRegular mx-2 2xl:mx-3">
          Or
        </h1>
        <hr className="w-[45%] border-[#464646] border-[1px]" />
      </div>

      <div className="flex items-center justify-center gap-x-5">
        <div className="flex items-center justify-center w-10 h-10 bg-[#3B5998] rounded-full">
          <FaFacebookF className="text-white text-lg" />
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-[#000000] rounded-full">
          <FaApple className="text-white text-lg" />
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-[#DB4437] rounded-full">
          <FaGoogle className="text-white text-lg" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Icons;
