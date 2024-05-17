import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="bg-[#F9F3DF] w-screen">
        <div
          className="py-32 px-4 lg:px-[10vw] space-y-10 md:flex md:flex-col md:items-center lg:flex-row lg:gap-x-10 lg:justify-between lg:items-center"
          data-aos="fade-right"
        >
          <div className="space-y-5">
            <h1 className="font-SolidenTrialBoldExpanded text-4xl xl:text-5xl">
              What We Do
            </h1>

            <h1 className="font-SolidenTrialRegular xl:text-lg xl:max-w-lg">
              At FEMM BULGARIA, our mission is to simplify your journey to
              finding the perfect apartment. With a commitment to excellence and
              a user-friendly platform, we strive to make your search for an
              ideal rental a seamless and enjoyable experience.
            </h1>

            <h1 className="font-SolidenTrialRegular xl:text-lg xl:max-w-lg">
              Explore a diverse range of apartments that cater to your unique
              preferences and lifestyle. Whether you're looking for a cozy
              studio, a spacious family home, or a stylish urban loft, our
              curated selection ensures that you'll find a place that feels just
              right.
            </h1>
          </div>

          <img
            src="../About/WhatWeDo.svg"
            alt="What We Do"
            className="w-full md:w-1/2 xl:w-[40%] 2xl:w-[40%]"
            data-aos="fade-left"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhatWeDo;
