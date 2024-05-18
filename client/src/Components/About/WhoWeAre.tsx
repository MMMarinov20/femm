import React from "react";

interface Props {
  Data: {
    Title: string;
    DescriptionFirst: string;
    SubTitleFirst: string;
    DescriptionSecond: string;
    SubTitleSecond: string;
    DescriptionThird: string;
    SubTitleThird: string;
    DescriptionFourth: string;
  };
}

const WhoWeAre: React.FC<Props> = ({ Data }) => {
  return (
    <React.Fragment>
      <div className="px-4 lg:px-[10vw] pb-32 w-screen flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-between lg:gap-x-5">
        <div className="py-32 flex flex-col gap-y-5 lg:gap-y-3 lg:w-1/2">
          <h1 className="font-SolidenTrialBoldExpanded text-4xl xl:text-5xl overflow-hidden">
            {Data.Title}
          </h1>
          <h1 className="font-SolidenTrialRegular 2xl:text-lg">
            {Data.DescriptionFirst}
          </h1>

          <h1 className="font-SolidenTrialBoldExpanded text-2xl">
            {Data.SubTitleFirst}
          </h1>
          <h1 className="font-SolidenTrialRegular 2xl:text-lg">
            {Data.DescriptionSecond}
          </h1>

          <h1 className="font-SolidenTrialBoldExpanded text-2xl">
            {Data.SubTitleSecond}
          </h1>
          <h1 className="font-SolidenTrialRegular 2xl:text-lg">
            {Data.DescriptionThird}
          </h1>

          <h1 className="font-SolidenTrialBoldExpanded text-2xl">
            {Data.SubTitleThird}
          </h1>
          <h1 className="font-SolidenTrialRegular 2xl:text-lg">
            {Data.DescriptionFourth}
          </h1>
        </div>
        <img
          src="../About/Hero.svg"
          alt="About Us"
          className="xl:w-[40%] 3xl:w-[30%]"
        />
      </div>
    </React.Fragment>
  );
};

export default WhoWeAre;
