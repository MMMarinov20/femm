import React from "react";
import Link from "./Link";
const Navbar: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between mt-6">
        <div className="ml-20">logo</div>
        <div className="flex gap-10 justify-center">
          <Link text="HOME" active={true} />
          <Link text="GALLERY" active={false} />
          <Link text="ABOUT" active={false} />
          <Link text="PRICING" active={false} />
        </div>
        <div className="mr-20">
          <button className="font-Graphik text-white bg-[#091157] px-9 py-2 rounded-full">
            Log in
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
