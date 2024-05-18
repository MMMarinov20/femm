import React, { useRef, useState, useEffect } from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";
import Footer from "./../Components/Home/Footer/Footer";
import Input from "../Components/Login/Input";
import Icons from "../Components/Login/Icons";
import Header from "../Components/Login/Header";
import { handleRegister } from "./../services/authService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "react-router-dom";
import { RegisterInterface } from "../data/lang/en/Register/Register";

const Register = () => {
  const [searchParams] = useSearchParams();
  const [registerData, setRegisterData] = useState<RegisterInterface | null>(
    null
  );

  useEffect(() => {
    const loadRegisterData = async () => {
      try {
        const RegisterModule = await import(
          `../data/lang/${searchParams.get("lang")}/Register/Register.json`
        );
        setRegisterData(RegisterModule.default);
      } catch (error) {
        console.error("Error loading the Register data:", error);
      }
    };

    loadRegisterData();
  }, [searchParams]);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  if (!registerData) return <div>Loading...</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstName = firstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    try {
      await handleRegister(firstName, lastName, email, password);
      firstNameRef.current!.value =
        lastNameRef.current!.value =
        emailRef.current!.value =
        passwordRef.current!.value =
          "";
    } catch (error: any) {
      console.error("Registration failed:", error.message);
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
              <Header
                heading={registerData.Title}
                subheading={registerData.Subtitle}
              />

              <Input
                ref={firstNameRef}
                placeholder={registerData.FirstNamePlaceholder}
                type="text"
                Icon={FaRegUser}
              />
              <Input
                ref={lastNameRef}
                placeholder={registerData.LastNamePlaceholder}
                type="text"
                Icon={FaRegUser}
              />
              <Input
                ref={emailRef}
                placeholder={registerData.EmailPlaceholder}
                type="email"
                Icon={HiOutlineMail}
              />
              <Input
                ref={passwordRef}
                placeholder={registerData.PasswordPlaceholder}
                type="password"
                Icon={HiOutlineLockClosed}
              />
              <Input type="select" Icon={CiMap} />

              <div className="w-full md:w-1/2 lg:w-8/12 pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#FF6241] rounded-lg py-2 2xl:py-3 text-white font-SolidenTrialRegular transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]"
                >
                  {registerData.Button}
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

export default Register;
