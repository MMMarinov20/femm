import React from "react";
import Box from "./Box";

const OurMission: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-screen px-4 py-20 space-y-10 lg:flex lg:justify-between lg:items-center lg:px-[10vw]">
        <div className="space-y-5 lg:w-1/2">
          <h1 className="font-SolidenTrialBoldExpanded text-4xl xl:text-5xl">
            Our Mission
          </h1>

          <h1 className="font-SolidenTrialRegular 2xl:max-w-lg xl:text-lg">
            At FEMM BULGARIA, our mission is clear—to simplify and enhance the
            journey of finding and securing rental properties. We strive to
            provide a platform that empowers tenants and property owners alike,
            fostering a community built on trust, transparency, and convenience.
          </h1>

          <h1 className="font-SolidenTrialRegular 2xl:max-w-lg xl:text-lg">
            At FEMM BULGARIA, our mission is clear—to simplify and enhance the
            journey of finding and securing rental properties. We strive to
            provide a platform that empowers tenants and property owners alike,
            fostering a community built on trust, transparency, and convenience.
          </h1>
        </div>

        <div className="px-10 space-y-10 lg:space-y-0 flex flex-col justify-center items-center lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurMission;
