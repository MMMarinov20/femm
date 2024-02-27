import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Footer from "./../Components/Home/Footer/Footer";

const Login: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BurgerNavbar color={"#FFFFFF"} />
      <div className="w-screen min-h-fit px-4 lg:px-[10vw]">
        <div className="w-full min-h-fit my-16 bg-white shadow-2xl rounded-2xl p-5 lg:p-0 lg:flex lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 text-center md:flex md:flex-col md:items-center">
            <h1 className="font-SolidenTrialBoldExpanded text-2xl lg:text-3xl 3xl:text-5xl overflow-hidden">
              Welcome
            </h1>
            <h1 className="font-SolidenTrialRegular text-xs 2xl:text-base">
              Don’t have and account yet?{" "}
              <span className="text-[#FF6241] underline cursor-pointer">
                Sign Up
              </span>
            </h1>

            <div className="w-full md:w-1/2 lg:w-8/12 flex items-center border-[1px] border-[#464646] rounded-lg px-2 py-2 2xl:py-3 my-3">
              <HiOutlineMail className="text-[#464646] text-center text-lg 2xl:text-xl" />
              <input
                type="email"
                placeholder="Email Address"
                className=" pl-2 pt-1 w-full outline-none border-none text-[#464646] text-xs 2xl:text-lg font-SolidenTrialRegular placeholder:text-[#464646] 2xl:placeholder:text-base"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-8/12 flex items-center border-[1px] border-[#464646] rounded-lg px-2 py-2 2xl:py-3 my-2">
              <HiOutlineLockClosed className="text-[#464646] text-center text-lg" />
              <input
                type="password"
                placeholder="Password"
                className=" pl-2 pt-1 w-full outline-none border-none text-[#464646] text-xs 2xl:text-lg font-SolidenTrialRegular placeholder:text-[#464646] 2xl:placeholder:text-base"
              />
            </div>

            <div className="w-full md:w-1/2 lg:w-8/12 pt-2">
              <button className="w-full bg-[#FF6241] rounded-lg py-2 2xl:py-3 text-white font-SolidenTrialRegular transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]">
                Login
              </button>
            </div>

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
          </div>

          <div className="hidden lg:block w-1/2">
            <img src="./Home/Login.png" alt="login" className="w-full h-full" />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
