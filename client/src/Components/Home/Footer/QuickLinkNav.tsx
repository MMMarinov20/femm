import React from "react";

const QuickLinkNav: React.FC = () => {
  return (
    <React.Fragment>
      <div className="text-white flex flex-col gap-y-3 xl:gap-y-6 text-center lg:text-left">
        <h1 className="font-SolidenTrialBoldExpanded">Quick links</h1>
        <h1 className="font-SolidenTrialRegular cursor-pointer">Home</h1>
        <h1 className="font-SolidenTrialRegular cursor-pointer">Our Rentals</h1>
        <h1 className="font-SolidenTrialRegular cursor-pointer">Builds</h1>
        <h1 className="font-SolidenTrialRegular cursor-pointer">About us</h1>
      </div>
    </React.Fragment>
  );
};

export default QuickLinkNav;
