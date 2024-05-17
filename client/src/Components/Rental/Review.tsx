import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Review: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div
        className="w-full h-fit px-4 py-14 lg:pb-16 pt-4 lg:pr-10 lg:pl-[10vw]"
        data-aos="fade-right"
      >
        <div className="w-full h-fit bg-white shadow-2xl rounded-xl p-5">
          <h1 className="font-SolidenTrialBoldExpanded text-lg">James Torff</h1>
          <h1 className="font-SolidenTrialRegular text-xs pb-2">Bulgaria</h1>

          <h1 className="font-SolidenTrialRegular">
            "Great place, it has become our favorite and we will definitely come
            back again.“
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Review;
