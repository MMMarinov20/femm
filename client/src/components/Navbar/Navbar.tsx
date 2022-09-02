import React from "react";
import Link from "./Link";
const Navbar: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between mt-6">
        <div className="hidden sm:block ml-10">
          <img
            src="src/assets/logo.png"
            alt=""
            className="w-full sm:h-16 lg:h-20 -mt-5"
          />
        </div>
        <div className="flex gap-5 justify-center ml-10 md:ml-0 lg:gap-10 xl:gap-14">
          <Link text="HOME" active={true} />
          <Link text="GALLERY" active={false} />
          <Link text="ABOUT" active={false} />
          <Link text="PRICING" active={false} />
        </div>
        <div className="mr-10 -mt-2 md:-mt-1">
          <button className="font-Graphik text-white bg-[#091157] px-6 py-1 rounded-full text-[0.6rem] md:text-base lg:text-lg lg:px-8 font-semibold lg:py-2">
            Login
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
