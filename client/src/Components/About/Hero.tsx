import React from "react";

const Hero: React.FC = () => {
  return (
    <React.Fragment>
      <div className="text-center bg-[#F9F2DF] pt-10 pb-20 px-4 lg:px-[10vw] overflow-hidden">
        <h1 className="font-SolidenTrialBoldExpanded text-5xl pb-3">
          About <span className="text-[#FF6241]">Us</span>
        </h1>
        <h1 className="font-SolidenTrialExpanded text-lg">
          At FEMM BULGARIA, our mission is to simplify your journey to finding
          the perfect apartment. With a commitment to excellence and a
          user-friendly platform, we strive to make your search for an ideal
          rental a seamless and enjoyable experience.
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Hero;
