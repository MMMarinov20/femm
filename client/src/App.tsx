import React from "react";
import Landing from "./Components/Home/Landing";
import About from "./Components/Home/About";
function App() {
  return (
    <React.Fragment>
      <Landing />
      <About />
      <div className="min-h-screen bg-[#F9F2DF] px-4 py-32">
        <div>
          <h1 className="overflow-hidden font-SolidenTrialBoldExpanded text-2xl min-[350px]:text-3xl min-[400px]:text-4xl xl:text-5xl 3xl:text-6xl">
            We Offer <span className="text-[#FF6241]">Flexible</span> Rental
            Terms For Our Customers
          </h1>
          <h1 className="font-SolidenTrialExpanded text-[#464646] py-3">
            At FEMM BULGARIA, flexibility meets convenience. Our commitment to
            providing exceptional service extends to offering flexible rental
            terms tailored to suit your unique needs. Whether you're seeking
            short-term arrangements, long-term leases, or something in between,
            we empower you with choices.
          </h1>
          <h1 className="font-SolidenTrialExpanded text-[#464646]">
            We understand that life comes with its twists and turns. That's why
            we prioritize your comfort and peace of mind by offering adjustable
            lease.
          </h1>
        </div>
        <div className="grid grid-rows-4 grid-cols-1 min-[380px]:grid-rows-2 min-[380px]:grid-cols-2 place-items-center gap-y-5 pt-5">
          <div className="bg-[url('./Home/People.svg')] bg-center bg-no-repeat row-span-2 h-full w-full"></div>

          <div className="row-span-1 bg-white w-fit min-h-fit rounded-2xl px-5 py-5 min-[380px]:py-4 min-[380px]:px-2">
            <img
              src="./Home/Affordable.jpg"
              className="w-[20vw] min-[380px]:w-[10vw]"
            />
            <h1 className="font-SolidenTrialBoldExpanded pt-3 pb-1">
              Affordable price
            </h1>
            <h1 className="font-SolidenTrialRegular text-xs max-w-[10rem]">
              Find a home that hits the sweet spot between great quality.
            </h1>
          </div>

          <div className="row-span-1 bg-white w-fit min-h-fit min-[380px]:h-fit rounded-2xl px-5 py-5 min-[380px]:py-4 min-[380px]:px-2">
            <img
              src="./Home/Work.jpg"
              className="w-[20vw] min-[380px]:w-[10vw]"
            />
            <h1 className="font-SolidenTrialBoldExpanded pt-3 pb-1">
              Affordable price
            </h1>
            <h1 className="font-SolidenTrialRegular text-xs max-w-[10rem]">
              Find a home that hits the sweet spot between great quality.
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
