import React from "react";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="font-SolidenTrialBoldExpanded text-2xl lg:text-3xl 3xl:text-5xl overflow-hidden">
        Welcome
      </h1>
      <h1 className="font-SolidenTrialRegular text-xs 2xl:text-base">
        Don’t have and account yet?{" "}
        <span className="text-[#FF6241] underline cursor-pointer">Sign Up</span>
      </h1>
    </React.Fragment>
  );
};

export default Header;
