import React from "react";

const Info: React.FC = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen px-4 py-20 flex flex-col lg:flex-row-reverse lg:px-[10vw] lg:gap-x-5 lg:items-center 2xl:gap-x-20">
        <div className="flex flex-col gap-y-5 2xl:gap-y-10 lg:w-1/2">
          <img src="./Property/Logo.svg" className="w-10/12 2xl:w-7/12" />
          <h1 className="font-GilroyRegular md:text-lg lg:text-base xl:text-lg 3xl:text-xl">
            Atlantis Aria is a residential complex located in Horizont district,
            the newest residential area of the city of Burgas, located next to
            Izgrev. The complex consists of two buildings with 5 and 8 floors
            each, where apartments with their own courtyard are located on the
            ground floor, as well as penthouses with spacious terraces and 3.2
            meter high ceilings on the top floor. The complex is located in
            close proximity to: the main roads of the city, the largest sports
            complex in Bulgaria "Arena Burgas", hypermarkets: Kaufland, Lidl,
            Technopolis, Metro, shopping and business centers, bus stop,
            schools, kindergartens, university , cafes and restaurants, fitness
            centers, etc.
          </h1>

          <div>
            <h1 className="font-SolidenTrialBoldExpanded md:text-xl lg:text-base xl:text-xl 3xl:text-2xl">
              Address
            </h1>
            <h1 className="font-GilroyRegular pb-2 2xl:pb-5 md:text-lg lg:text-base xl:text-lg">
              Lezgrev,Burgas{" "}
              <span className="underline cursor-pointer">See Location</span>
            </h1>
            <h1 className="font-SolidenTrialBoldExpanded md:text-xl lg:text-base xl:text-xl 3xl:text-2xl">
              Degree of Completion
            </h1>
            <h1 className="font-GilroyRegular pb-2 2xl:pb-5 md:text-lg lg:text-base xl:text-lg">
              Act 16
            </h1>
            <h1 className="font-SolidenTrialBoldExpanded md:text-xl lg:text-base xl:text-xl 3xl:text-2xl">
              Free Proeprties
            </h1>
            <h1 className="font-GilroyRegular md:text-lg lg:text-base xl:text-lg">
              2
            </h1>
          </div>
        </div>

        <img
          src="./Property/Building.svg"
          className="w-full pt-5 lg:pt-0 2xl:w-1/2"
        />
      </div>
    </React.Fragment>
  );
};

export default Info;
