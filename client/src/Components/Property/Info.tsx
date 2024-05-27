import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  Data: {
    Description: string;
    Address: string;
    Degree: string;
    Properties: string;
  };
}

const Info: React.FC<Props> = ({ Data }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="min-h-screen px-4 py-20 flex flex-col lg:flex-row-reverse lg:px-[10vw] lg:gap-x-5 lg:items-center 2xl:gap-x-20">
        <div
          className="flex flex-col gap-y-5 2xl:gap-y-10 lg:w-1/2"
          data-aos="fade-left"
        >
          <img src="../Property/Logo.svg" className="w-10/12 2xl:w-7/12" />
          <h1 className="font-GilroyRegular md:text-lg lg:text-base xl:text-lg 3xl:text-xl">
            {Data.Description}
          </h1>

          <div>
            <h1 className="font-SolidenTrialBoldExpanded md:text-xl lg:text-base xl:text-xl 3xl:text-2xl">
              Address
            </h1>
            <h1 className="font-GilroyRegular pb-2 2xl:pb-5 md:text-lg lg:text-base xl:text-lg">
              {Data.Address}{" "}
              <span className="underline cursor-pointer">See Location</span>
            </h1>
            <h1 className="font-SolidenTrialBoldExpanded md:text-xl lg:text-base xl:text-xl 3xl:text-2xl">
              Degree of Completion
            </h1>
            <h1 className="font-GilroyRegular pb-2 2xl:pb-5 md:text-lg lg:text-base xl:text-lg">
              {Data.Degree}
            </h1>
            <h1 className="font-SolidenTrialBoldExpanded md:text-xl lg:text-base xl:text-xl 3xl:text-2xl">
              Free Properties
            </h1>
            <h1 className="font-GilroyRegular md:text-lg lg:text-base xl:text-lg">
              {Data.Properties}
            </h1>
          </div>
        </div>

        <img
          src="../Property/Building.svg"
          className="w-full pt-5 lg:pt-0 2xl:w-1/2"
          data-aos="fade-right"
        />
      </div>
    </React.Fragment>
  );
};

export default Info;
