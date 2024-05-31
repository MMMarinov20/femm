import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { infoToast } from "../../utils/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      <div className="flex items-center md:w-1/2 lg:w-8/12 justify-center gap-x-5">
        <div
          onClick={() => infoToast("Feature coming soon", 2000)}
          className="flex items-center justify-center w-10 h-10 bg-[#3B5998] rounded-full cursor-pointer"
        >
          <FaFacebookF className="text-white text-lg" />
        </div>
        <div
          onClick={() => infoToast("Feature coming soon", 2000)}
          className="flex items-center justify-center w-10 h-10 bg-[#000000] rounded-full cursor-pointer"
        >
          <FaApple className="text-white text-lg" />
        </div>
        <div
          onClick={() => infoToast("Feature coming soon", 2000)}
          className="flex items-center justify-center w-10 h-10 bg-[#DB4437] rounded-full cursor-pointer"
        >
          <FaGoogle className="text-white text-lg" />
        </div>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default Icons;
