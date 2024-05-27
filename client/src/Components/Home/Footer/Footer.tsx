import React, { useState, useEffect } from "react";
import { IFooterData } from "../../../data/Interfaces/IFooterData";
import { useSearchParams } from "react-router-dom";
import QuickLinkNav from "./QuickLinkNav";
const Footer: React.FC = () => {
  const [pageLang, setPageLang] = useState<IFooterData>({
    Description: "Loading...",
    Links: [
      {
        Title: "Loading...",
        Url: "Loading...",
      },
    ],
    Copyright: "Loading...",
    Privacy: "Loading...",
    Terms: "Loading...",
  });
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const loadPageLang = async () => {
      const footerModule = await import(
        `../../../data/lang/${searchParams.get("lang")}/Footer/footer.json`
      );
      setPageLang(footerModule.default);
    };
    loadPageLang();
  }, [searchParams]);
  return (
    <React.Fragment>
      <div className="min-h-fit w-screen bg-[#2A2A2A]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center py-10 xl:py-32 px-4 lg:px-[10vw] text-xs md:text-lg lg:text-base gap-y-10">
          <div className="text-center lg:text-left lg:max-w-xs">
            <h1 className="font-SolidenTrialBoldExpanded text-white text-xl md:text-2xl">
              Logo
            </h1>
            <h1 className="font-SolidenTrialRegular text-white">
              {pageLang?.Description}
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-10 xl:gap-x-32">
            <QuickLinkNav data={pageLang?.Links} />
            <QuickLinkNav data={pageLang?.Links} />
            <QuickLinkNav data={pageLang?.Links} />
          </div>
        </div>
        <hr className="w-screen border-2 border-gray-500" />
        <div className="text-white underline lg:flex lg:justify-between lg:items-center lg:px-[10vw] py-5">
          <h1 className="text-center text-xs md:text-base lg:text-left">
            © {new Date().getFullYear()} FEMM BULGARIA. {pageLang?.Copyright}
          </h1>

          <div className="flex gap-x-4 justify-center pt-2 lg:p-0 text-xs md:text-base">
            <h1>{pageLang.Privacy}</h1>
            <h1>{pageLang.Terms}</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
