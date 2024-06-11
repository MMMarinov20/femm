import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  Data: {
    Title: string;
    DescriptionFirst: string;
    DescriptionSecond: string;
  };
}

const WhatWeDo: React.FC<Props> = ({ Data }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="bg-[#F9F3DF] w-screen">
        <div
          className="py-32 px-4 lg:px-[10vw] space-y-10 md:flex md:flex-col md:items-center lg:flex-row lg:gap-x-10 lg:justify-between lg:items-center"
          data-aos="fade-right"
        >
          <div className="space-y-5">
            <h1 className="font-SolidenTrialBoldExpanded text-4xl xl:text-5xl">
              {Data.Title}
            </h1>

            <h1 className="font-SolidenTrialRegular xl:text-lg xl:max-w-lg">
              {Data.DescriptionFirst}
            </h1>

            <h1 className="font-SolidenTrialRegular xl:text-lg xl:max-w-lg">
              {Data.DescriptionSecond}
            </h1>
          </div>

          <img
            loading="lazy"
            src="../About/WhatWeDo.svg"
            alt="What We Do"
            className="w-full md:w-1/2 xl:w-[40%] 2xl:w-[40%]"
            data-aos="fade-left"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhatWeDo;
