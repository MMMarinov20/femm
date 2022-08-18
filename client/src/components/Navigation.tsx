import React from "react";

const Navigation: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div>logo</div>
        <div className="flex gap-10">
          <p className="font-Graphik text-2xl font-black text-[#091157]">
            Home
          </p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
        <div>Log In</div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
