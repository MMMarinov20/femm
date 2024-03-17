import React from "react";

const Advantage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-full md:w-1/2 lg:w-[80%] 2xl:w-[70%] h-fit bg-white shadow-2xl px-5 py-10 rounded-xl 2xl:rounded-3xl flex flex-col gap-y-3">
        <img
          src="/Property/Icon.svg"
          alt="advantages"
          className="w-[15vw] md:w-[10vw] lg:w-[8vw] 2xl:w-[3vw]"
        />
        <h1 className="font-SolidenTrialBoldExpanded text-lg max-w-[15rem] min-[350px]:text-xl lg:text-2xl lg:max-w-xs">
          Thermal Insulation System Baumit
        </h1>

        <h1 className="font-GilroyRegular">
          Baumit Silicone Plaster Thermal Insulation System 10 cm thick and 15
          cm thick from the north walls.
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Advantage;
