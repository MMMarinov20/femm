import React from "react";

interface Props {
  Data: {
    Hero: string;
    SubHero: string;
  };
}

const Hero: React.FC<Props> = ({ Data }) => {
  return (
    <React.Fragment>
      <div className="text-center bg-[#F9F2DF] pt-10 pb-20 px-4 lg:px-[10vw] overflow-hidden">
        <h1
          dangerouslySetInnerHTML={{ __html: Data.Hero }}
          className="font-SolidenTrialBoldExpanded text-5xl pb-3"
        ></h1>
        <h1 className="font-SolidenTrialExpanded text-lg">{Data.SubHero}</h1>
      </div>
    </React.Fragment>
  );
};

export default Hero;
