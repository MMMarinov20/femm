import React from "react";
import QuickLinkNav from "./QuickLinkNav";
const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div className="min-h-fit w-screen bg-[#2A2A2A]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center py-10 xl:py-32 px-4 lg:px-[10vw] text-xs md:text-lg lg:text-base gap-y-10">
          <div className="text-center lg:text-left lg:max-w-xs">
            <h1 className="font-SolidenTrialBoldExpanded text-white text-xl md:text-2xl">
              Logo
            </h1>
            <h1 className="font-SolidenTrialRegular text-white">
              Lorem ipsum dolor sit amet consectetur. Vitae risus ac
              pellentesque velit sed scelerisque. Viverra scelerisque mauris
              risus id. Consequat id est lacus dapibus pulvinar tortor sed.
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-10 xl:gap-x-32">
            <QuickLinkNav />
            <QuickLinkNav />
            <QuickLinkNav />
          </div>
        </div>
        <hr className="w-screen border-2 border-gray-500" />
        <div className="text-white underline lg:flex lg:justify-between lg:items-center lg:px-[10vw] py-5">
          <h1 className="text-center text-xs md:text-base lg:text-left">
            © 2024 FEMM BULGARIA. All rights reserved.
          </h1>

          <div className="flex gap-x-4 justify-center pt-2 lg:p-0 text-xs md:text-base">
            <h1>Privacy Policy</h1>
            <h1>Terms of Use</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
