import React from "react";
import BurgerNavbar from "./Components/Navbar/BurgerNavbar";
import Navbar from "./Components/Navbar/Navbar";
import { CiSearch } from "react-icons/ci";

function App() {
  return (
    <React.Fragment>
      <div className="w-screen min-h-fit bg-[#F9F3DF]">
        <Navbar />
        <BurgerNavbar />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between w-full min-h-fit pt-16 min-[350px]:pt-10 lg:pt-0">
          <h1 className="lg:pl-[7vw] xl:pl-[10vw] 2xl:pl-[12vw] 3xl:pl-[13vw] font-SolidenTrialBoldExpanded text-2xl md:text-5xl 3xl:text-6xl max-w-[70vw] min-[350px]:max-w-xs md:max-w-xl lg:max-w-md xl:max-w-3xl 3xl:max-w-5xl min-[350px]:text-3xl lg:text-5xl lg:pt-[5vh] xl:pt-[10vh]">
            Discover <span className="text-[#FF6241]">Ideal</span> Properties
            With Our Rental Platform
          </h1>

          <div className="flex flex-col items-center pt-16 lg:pt-0">
            {/* <img
              src="./Home/HeroBackground.png"
              alt="hero"
              className="md:hidden w-screen"
            /> */}
            <img
              src="./Home/HeroBackgroundDesktop.png"
              alt="hero"
              className="lg:w-[50vw] 2xl:w-[40vw] overflow-x-hidden"
            />
          </div>
        </div>
      </div>

      <div className="h-screen"></div>
    </React.Fragment>
  );
}

export default App;
