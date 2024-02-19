import React from "react";
import BurgerNavbar from "./Components/Navbar/BurgerNavbar";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <div className="w-screen min-h-screen bg-[#F9F3DF] flex flex-col items-center">
        <Navbar />
        <BurgerNavbar />

        <h1 className="font-SolidenTrialBoldExpanded text-lg text-center pt-16">
          Discover <span className="text-[#FF6241]">Ideal</span> Properties With
          Our Rental Platform
        </h1>

        <div className="flex flex-col items-center pt-16">
          <img
            src="./Home/HeroBackground.svg"
            alt="hero"
            className="object-cover bg-no-repeat bg-center bg-cover"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
