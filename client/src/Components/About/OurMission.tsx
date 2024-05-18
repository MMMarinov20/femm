import React, { useEffect } from "react";
import Box from "./Box";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  Data: {
    Title: string;
    DescriptionFirst: string;
    DescriptionSecond: string;
    Boxes: {
      title: string;
      description: string;
    }[];
  };
}

const OurMission: React.FC<Props> = ({ Data }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="w-screen px-4 py-20 space-y-10 lg:flex lg:justify-between lg:items-center lg:px-[10vw]">
        <div className="space-y-5 lg:w-1/2" data-aos="fade-right">
          <h1 className="font-SolidenTrialBoldExpanded text-4xl xl:text-5xl">
            {Data.Title}
          </h1>

          <h1 className="font-SolidenTrialRegular 2xl:max-w-lg xl:text-lg">
            {Data.DescriptionFirst}
          </h1>

          <h1 className="font-SolidenTrialRegular 2xl:max-w-lg xl:text-lg">
            {Data.DescriptionSecond}
          </h1>
        </div>

        <div className="px-10 space-y-10 lg:space-y-0 flex flex-col justify-center items-center lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
          {Data.Boxes.map((box, index) => (
            <Box key={index} title={box.title} description={box.description} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurMission;
