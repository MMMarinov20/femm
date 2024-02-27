import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import { HiOutlineMail } from "react-icons/hi";

const Login: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-screen min-h-fit">
        <Navbar />
        <BurgerNavbar color={"#FFFFFF"} />

        <div className="w-screen min-h-fit my-16 bg-white shadow-2xl rounded-2xl p-5">
          <div className="w-full text-center">
            <h1 className="font-SolidenTrialBoldExpanded">Welcome</h1>
            <h1 className="font-SolidenTrialRegular text-xs">
              Don’t have and account yet?{" "}
              <span className="text-[#FF6241] underline cursor-pointer">
                Sign Up
              </span>
            </h1>

            <div className="w-full flex items-center border-[1px] border-[#464646] rounded-lg px-2 py-2 my-2">
              <HiOutlineMail className="text-[#464646] text-center" />
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none border-none text-[#464646] text-xs font-SolidenTrialRegular placeholder:text-[#464646]"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
