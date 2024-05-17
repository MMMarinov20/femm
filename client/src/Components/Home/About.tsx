import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <div className="min-h-screen w-screen py-32 grid place-items-center gap-y-32 lg:gap-0 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:px-[10vw] xl:px-[10vw] xl:gap-x-5 2xl:gap-0">
        <div
          className="px-4 md:max-w-xl lg:max-w-md xl:max-w-xl 3xl:max-w-[40rem]"
          data-aos="fade-left"
        >
          <h1 className="text-[#FF6241] font-SolidenTrialBoldExpanded min-[350px]:text-xl xl:text-2xl">
            About us
          </h1>
          <h1 className="overflow-hidden font-SolidenTrialBoldExpanded text-2xl min-[350px]:text-3xl min-[400px]:text-4xl xl:text-5xl 3xl:text-6xl">
            Let Us Guide You To The{" "}
            <span className="text-[#FF6241]">Perfect</span> Apartment
          </h1>
          <h1 className="font-SolidenTrialExpanded py-3 2xl:text-base 3xl:text-lg">
            At FEMM BULGARIA, our mission is to simplify your journey to finding
            the perfect apartment. With a commitment to excellence and a
            user-friendly platform, we strive to make your search for an ideal
            rental a seamless and enjoyable experience.
          </h1>
          <h1 className="font-SolidenTrialExpanded 2xl:text-base 3xl:text-lg">
            Explore a diverse range of apartments that cater to your unique
            preferences and lifestyle. Whether you're looking for a cozy studio,
            a spacious family home, or a stylish urban loft, our curated
            selection ensures that you'll find a place that feels just right.
          </h1>

          <button className="bg-[#FF6241] text-white font-SolidenTrialExpanded text-sm xl:text-lg mt-5 py-3 xl:py-4 rounded-lg w-[60vw] min-[350px]:w-[50vw] md:w-[20vw] xl:w-[15vw] transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]">
            Get Started
          </button>
        </div>
        <div
          className="flex flex-row justify-center lg:block px-4 lg:px-0 w-screen lg:w-full 2xl:w-9/12 overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src="./Home/About.svg"
            alt=""
            className="w-screen md:w-1/2 lg:w-full object-cover 2xl:w-10/12 3xl:w-[70%]"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
