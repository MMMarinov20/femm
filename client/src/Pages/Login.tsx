import React, { useRef } from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import Footer from "./../Components/Home/Footer/Footer";
import Input from "../Components/Login/Input";
import Icons from "../Components/Login/Icons";
import Header from "../Components/Login/Header";
import { handleLogin } from "../services/authService";
import { useUser } from "./../hooks/useUser";
import { ToastContainer } from "react-toastify";
import { errorToast } from "../utils/utils";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const { updateUser } = useUser();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const token = await handleLogin(email, password);
      if (token) {
        setTimeout(() => {
          updateUser(true, null, "", "", "", []);
          window.location.href = "/";
        }, 2000);
      }
      emailRef.current.value = passwordRef.current.value = "";
    } catch (error: any) {
      errorToast(error.message, 2000);
    }
  };

  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <Navbar />
        <BurgerNavbar color={"#FFFFFF"} />
        <div className="w-screen min-h-fit px-4 lg:px-[10vw]">
          <div className="w-full min-h-fit my-16 bg-white shadow-2xl rounded-2xl p-5 lg:p-0 lg:flex lg:flex-row lg:items-center">
            <form
              className="w-full lg:w-1/2 text-center md:flex md:flex-col md:items-center"
              onSubmit={handleSubmit}
            >
              <Header heading="Don't have an account yet? " method="Sign up" />

              <Input
                ref={emailRef}
                placeholder="Email Address"
                type="email"
                Icon={HiOutlineMail}
              />
              <Input
                ref={passwordRef}
                placeholder="Password"
                type="password"
                Icon={HiOutlineLockClosed}
              />

              <div className="w-full md:w-1/2 lg:w-8/12 pt-2">
                <button className="w-full bg-[#FF6241] rounded-lg py-2 2xl:py-3 text-white font-SolidenTrialRegular transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]">
                  Login
                </button>
                <ToastContainer />
              </div>

              <Icons />
            </form>

            <div className="hidden lg:block w-1/2">
              <img
                src="./Home/Login.png"
                alt="login"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Login;
