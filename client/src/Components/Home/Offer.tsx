import React from "react";

const Offer: React.FC = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-[#F9F2DF] px-4 py-32 md:grid md:place-items-center lg:flex lg:flex-row lg:justify-between lg:px-[10vw] lg:p-0">
        <div className="md:max-w-xl lg:max-w-sm xl:max-w-xl">
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
        <div className="grid grid-rows-4 grid-cols-1 min-[380px]:grid-rows-2 min-[380px]:grid-cols-2 place-items-center lg:place-items-start gap-y-5 md:gap-5 pt-5 pb-20 md:p-20 lg:p-0 lg:gap-3 2xl:p-10">
          <div className="bg-[url('./Home/People.svg')] md:bg-[url('./Home/PeopleBig.svg')] bg-center bg-no-repeat row-span-2 h-full w-full rounded-2xl drop-shadow-xl lg:shadow-none 2xl:shadow-xl"></div>

          <div className="row-span-1 bg-white w-fit min-h-fit rounded-2xl px-5 py-5 min-[380px]:py-4 min-[380px]:px-2 md:p-6 shadow-xl lg:shadow-none 2xl:shadow-xl">
            <img
              src="./Home/Affordable.jpg"
              className="w-[20vw] min-[380px]:w-[10vw] md:w-[5vw] 2xl:w-[3vw]"
            />
            <h1 className="font-SolidenTrialBoldExpanded pt-3 pb-1 md:text-xl lg:text-lg 2xl:text-2xl">
              Affordable price
            </h1>
            <h1 className="font-SolidenTrialRegular text-xs max-w-[10rem] md:text-lg lg:text-xs 2xl:text-base 2xl:max-w-[15rem]">
              Find a home that hits the sweet spot between great quality.
            </h1>
          </div>

          <div className="row-span-1 bg-white w-fit min-h-fit rounded-2xl px-5 py-5 min-[380px]:py-4 min-[380px]:px-2 md:p-6 shadow-xl lg:shadow-none 2xl:shadow-xl">
            <img
              src="./Home/Work.jpg"
              className="w-[20vw] min-[380px]:w-[10vw] md:w-[5vw] 2xl:w-[3vw]"
            />
            <h1 className="font-SolidenTrialBoldExpanded pt-3 pb-1 md:text-xl lg:text-lg 2xl:text-2xl">
              Affordable price
            </h1>
            <h1 className="font-SolidenTrialRegular text-xs max-w-[10rem] md:text-lg lg:text-xs 2xl:text-base 2xl:max-w-[15rem]">
              Find a home that hits the sweet spot between great quality.
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Offer;
