import React from "react";
import Landing from "./Components/Home/Landing";
import About from "./Components/Home/About";
import Offer from "./Components/Home/Offer";

function App() {
  return (
    <React.Fragment>
      <Landing />
      <About />
      <Offer />
      <div className="min-h-screen w-screen bg-[#2A2A2A] flex flex-col items-center py-10 px-4 text-xs gap-y-10">
        <div className="text-center">
          <h1 className="font-SolidenTrialBoldExpanded text-white text-xl">
            Logo
          </h1>
          <h1 className="font-SolidenTrialRegular text-white">
            Lorem ipsum dolor sit amet consectetur. Vitae risus ac pellentesque
            velit sed scelerisque. Viverra scelerisque mauris risus id.
            Consequat id est lacus dapibus pulvinar tortor sed.
          </h1>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="text-white flex flex-col gap-y-3 text-center">
            <h1 className="font-SolidenTrialBoldExpanded">Quick links</h1>
            <h1 className="font-SolidenTrialRegular">Home</h1>
            <h1 className="font-SolidenTrialRegular">Our Rentals</h1>
            <h1 className="font-SolidenTrialRegular">Builds</h1>
            <h1 className="font-SolidenTrialRegular">About us</h1>
          </div>

          <div className="text-white flex flex-col gap-y-3 text-center">
            <h1 className="font-SolidenTrialBoldExpanded">Quick links</h1>
            <h1 className="font-SolidenTrialRegular">Home</h1>
            <h1 className="font-SolidenTrialRegular">Our Rentals</h1>
            <h1 className="font-SolidenTrialRegular">Builds</h1>
            <h1 className="font-SolidenTrialRegular">About us</h1>
          </div>

          <div className="text-white flex flex-col gap-y-3 text-center">
            <h1 className="font-SolidenTrialBoldExpanded">Quick links</h1>
            <h1 className="font-SolidenTrialRegular">Home</h1>
            <h1 className="font-SolidenTrialRegular">Our Rentals</h1>
            <h1 className="font-SolidenTrialRegular">Builds</h1>
            <h1 className="font-SolidenTrialRegular">About us</h1>
          </div>
        </div>

        <hr className="w-screen border-2 border-gray-500" />
        <div className="text-white underline">
          <h1>© 2024 FEMM BULGARIA. All rights reserved.</h1>

          <div className="flex gap-x-4 justify-center pt-2">
            <h1>Privacy Policy</h1>
            <h1>Terms of Use</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
