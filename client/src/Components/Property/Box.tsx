import React from "react";

const Box: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-10/12 shadow-2xl bg-white hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl flex flex-col justify-center items-center p-8 2xl:p-12 md:gap-y-5">
      <img
        src="../Property/Icon.svg"
        className="w-[30%] lg:w-[35%]"
        alt="Icon"
      />
      <h1 className="font-SolidenTrialBoldExpanded text-center md:text-xl 2xl:text-2xl">
        Green Gardens and Outdoor Areas
      </h1>
    </div>
  );
};

export default Box;
