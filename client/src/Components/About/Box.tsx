import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Box: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div
        className="p-5 2xl:py-10 shadow-2xl space-y-3 rounded-2xl sm:w-1/2 sm:h-1/2 lg:w-full lg:h-fit"
        data-aos="fade-left"
      >
        <img src="../About/Icon.svg" alt="Icon" />
        <h1 className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl">
          Empowering Choices
        </h1>
        <h1 className="font-SolidenTrialRegular max-w-xs xl:text-lg">
          Find a home that hits the sweet spot between great quality.
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Box;
