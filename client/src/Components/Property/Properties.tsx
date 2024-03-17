import React from "react";

const Properties: React.FC = () => {
  return (
    <React.Fragment>
      <div className="min-h-fit w-screen bg-[#F9F2DF] py-20 my-20">
        <div className="flex flex-col items-center w-full h-full">
          <h1 className="font-SolidenTrialBoldExpanded text-3xl pb-10 md:text-5xl 2xl:text-6xl">
            Properties
          </h1>
          <div className="flex flex-col gap-y-10 px-4 lg:flex-row lg:justify-between lg:px-[10vw] lg:gap-x-10 w-full">
            <img
              src="./Property/Property.svg"
              alt="Property"
              className="w-full h-full"
            />
            <img
              src="./Property/Property.svg"
              alt="Property"
              className="w-full h-full"
            />
            <img
              src="./Property/Property.svg"
              alt="Property"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Properties;
