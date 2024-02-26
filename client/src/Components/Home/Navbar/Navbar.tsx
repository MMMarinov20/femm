import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar: React.FC = () => {
  const [dropdownRentalsMenu, setDropdownRentalsMenu] = useState(false);
  const [dropdownBuildsMenu, setDropdownBuildsMenu] = useState(false);

  const handleRentalsDropdown = () => {
    setDropdownRentalsMenu(!dropdownRentalsMenu);
  };

  const handleBuildsDropdown = () => {
    setDropdownBuildsMenu(!dropdownBuildsMenu);
  };

  return (
    <React.Fragment>
      <div className="hidden w-screen lg:flex flex-row items-center px-[10vw] justify-between py-10">
        <div className="flex flex-row gap-x-5 xl:gap-x-10 xl:text-lg font-SolidenTrialRegular">
          <h1 className="font-black">Logo</h1>
          <h1>Home</h1>

          <div
            onMouseLeave={handleRentalsDropdown}
            onMouseEnter={handleRentalsDropdown}
          >
            <h1 className="inline-flex text-center cursor-pointer">
              Our Rentals <IoMdArrowDropdown />
            </h1>

            <div
              className={`absolute text-gray-600 flex flex-col items-center justify-center text-center gap-y-5 pt-3 ${
                dropdownRentalsMenu ? "visible" : "hidden"
              }`}
            >
              <h1 className="cursor-pointer">Option 1</h1>
              <h1 className="cursor-pointer">Option 2</h1>
              <h1 className="cursor-pointer">Option 3</h1>
            </div>
          </div>

          <div
            onMouseLeave={handleBuildsDropdown}
            onMouseEnter={handleBuildsDropdown}
          >
            <h1 className="inline-flex text-center cursor-pointer">
              Builds <IoMdArrowDropdown />
            </h1>

            <div
              className={`absolute text-gray-600 flex flex-col items-center justify-center text-center gap-y-5 pt-3 ${
                dropdownBuildsMenu ? "visible" : "hidden"
              }`}
            >
              <h1 className="cursor-pointer">Option 1</h1>
              <h1 className="cursor-pointer">Option 2</h1>
              <h1 className="cursor-pointer">Option 3</h1>
            </div>
          </div>
          <h1>About Us</h1>
        </div>

        <div className="flex flex-row gap-x-5">
          <div className="cursor-pointer border-[1px] border-[#FF6241] text-[#FF6241] font-SolidenTrialRegular w-[15vw] xl:w-[10vw] 2xl:w-[8vw] py-2 xl:py-3 rounded-xl text-center transition-colors duration-300 hover:bg-[#FF6241] hover:text-white 2xl:text-xl">
            Log in
          </div>
          <div className="cursor-pointer text-white font-SolidenTrialRegular w-[15vw] xl:w-[10vw] 2xl:w-[8vw] py-2 xl:py-3 rounded-xl text-center bg-[#FF6241] transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px] 2xl:text-xl">
            Register
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
