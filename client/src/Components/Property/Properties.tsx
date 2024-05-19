import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <div className="min-h-fit w-screen bg-[#F9F2DF] py-20 my-20">
        <div className="flex flex-col items-center w-full h-full">
          <h1
            className="font-SolidenTrialBoldExpanded text-3xl pb-10 md:text-5xl 2xl:text-6xl"
            data-aos="fade-right"
          >
            Properties
          </h1>
          <div className="flex flex-col gap-y-10 px-4 lg:flex-row lg:justify-between lg:px-[10vw] lg:gap-x-10 w-full">
            <Link to={"/property/1"} className="w-full" data-aos="fade-right">
              <img
                src="./Property/Property1.svg"
                alt="Property"
                className="w-full h-full rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
              />
            </Link>
            <Link to={"/property/1"} className="w-full" data-aos="fade-up">
              <img
                src="./Property/Property1.svg"
                alt="Property"
                className="w-full h-full rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
              />
            </Link>
            <Link to={"/property/1"} className="w-full" data-aos="fade-left">
              <img
                src="./Property/Property1.svg"
                alt="Property"
                className="w-full h-full rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Properties;
