import React, { useRef, useState, useEffect, Suspense } from "react";
const Navbar = React.lazy(() => import("../Components/Home/Navbar/Navbar"));
const BurgerNavbar = React.lazy(
  () => import("../Components/Home/Navbar/BurgerNavbar")
);
const Footer = React.lazy(() => import("./../Components/Home/Footer/Footer"));
const Input = React.lazy(() => import("../Components/Login/Input"));
const Icons = React.lazy(() => import("../Components/Login/Icons"));
const Header = React.lazy(() => import("../Components/Login/Header"));
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";
import { handleRegister } from "./../services/authService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "react-router-dom";
import { RegisterInterface } from "../data/lang/en/Register/Register";
import LoadingSpinner from "../Components/LoadingSpinner";
import { INavbarData } from "../data/Interfaces/INavbarData";

const Register = () => {
  const [searchParams] = useSearchParams();
  const [pageLangData, setPageLangData] = useState<RegisterInterface | null>(
    null
  );
  const [navbarData, setNavbarData] = useState<INavbarData | null>(null);

  useEffect(() => {
    const loadRegisterData = async () => {
      try {
        const RegisterModule = await import(
          `../data/lang/${searchParams.get("lang")}/Register/Register.json`
        );

        const NavbarModule = await import(
          `../data/lang/${searchParams.get("lang")}/Navbar/navbar.json`
        );

        setNavbarData(NavbarModule.default);
        setPageLangData(RegisterModule.default);
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

  if (!pageLangData || !navbarData) return <LoadingSpinner />;

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
      <Suspense fallback={<LoadingSpinner />}>
        <div className="overflow-hidden">
          <Navbar Data={navbarData} />
          <BurgerNavbar Data={navbarData} color={"#FFFFFF"} />
          <div className="w-screen min-h-fit px-4 lg:px-[10vw]">
            <div className="w-full min-h-fit my-16 bg-white shadow-2xl rounded-2xl p-5 lg:p-0 lg:flex lg:flex-row lg:items-center">
              <form
                className="w-full lg:w-1/2 text-center md:flex md:flex-col md:items-center"
                onSubmit={handleSubmit}
              >
                <Header
                  heading={pageLangData.Title}
                  subheading={pageLangData.Subtitle}
                  alternative="/login"
                />

                <Input
                  ref={firstNameRef}
                  placeholder={pageLangData.FirstNamePlaceholder}
                  type="text"
                  Icon={FaRegUser}
                />
                <Input
                  ref={lastNameRef}
                  placeholder={pageLangData.LastNamePlaceholder}
                  type="text"
                  Icon={FaRegUser}
                />
                <Input
                  ref={emailRef}
                  placeholder={pageLangData.EmailPlaceholder}
                  type="email"
                  Icon={HiOutlineMail}
                />
                <Input
                  ref={passwordRef}
                  placeholder={pageLangData.PasswordPlaceholder}
                  type="password"
                  Icon={HiOutlineLockClosed}
                />
                <Input type="select" Icon={CiMap} />

                <div className="w-full md:w-1/2 lg:w-8/12 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#FF6241] rounded-lg py-2 2xl:py-3 text-white font-SolidenTrialRegular transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] border-[1px] border-[#FF6241]"
                  >
                    {pageLangData.Button}
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
      </Suspense>
    </React.Fragment>
  );
};

export default Register;
