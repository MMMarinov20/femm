import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const SearchContainer: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-full lg:w-[60%] h-fit bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-2xl p-5 flex flex-col md:text-lg">
        <h1 className="font-GilroyBold text-2xl md:text-4xl overflow-hidden">
          Search
        </h1>
        <h1 className="font-GilroyRegular">
          Name of destination / place of accommodation.
        </h1>

        <div className="flex flex-col gap-y-5 pt-3">
          <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
            <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
            <input
              placeholder="Search"
              className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
            />
          </div>
          <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
            <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
            <input
              placeholder="Search"
              className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
            />
          </div>
          <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
            <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
            <input
              placeholder="Search"
              className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
            />
          </div>
          <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
            <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
            <input
              placeholder="Search"
              className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
            />
          </div>
        </div>

        <div>
          <input type="checkbox" className="mt-5" />
          <label className="font-GilroyRegular pl-2">
            I agree to the terms and conditions.
          </label>
        </div>

        <button className="w-full bg-[#FF6241] py-3 text-white font-GilroyRegular rounded-lg text-xs mt-2 md:text-base transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]">
          Search
        </button>
      </div>
    </React.Fragment>
  );
};

export default SearchContainer;
