import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";

const About = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F9F2DF]">
        <Navbar />
      </div>
      <BurgerNavbar color="#F9F2DF" />

      <div className="text-center bg-[#F9F2DF] pt-10 pb-20 px-4 lg:px-[10vw] overflow-hidden">
        <h1 className="font-SolidenTrialBoldExpanded text-5xl pb-3">
          About <span className="text-[#FF6241]">Us</span>
        </h1>
        <h1 className="font-SolidenTrialExpanded text-lg">
          At FEMM BULGARIA, our mission is to simplify your journey to finding
          the perfect apartment. With a commitment to excellence and a
          user-friendly platform, we strive to make your search for an ideal
          rental a seamless and enjoyable experience.
        </h1>
      </div>

      <div className="px-4 lg:px-[10vw] pb-32 w-screen flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-between lg:gap-x-5">
        <div className="py-32 flex flex-col gap-y-5 lg:gap-y-3 lg:w-1/2">
          <h1 className="font-SolidenTrialBoldExpanded text-4xl xl:text-5xl overflow-hidden">
            Who We Are
          </h1>
          <h1 className="font-SolidenTrialRegular 2xl:text-lg">
            At FEMM BULGARIA, we specialize in connecting individuals with their
            ideal living spaces. Our platform is designed to simplify the rental
            process, offering a comprehensive range of services to ensure a
            seamless and enjoyable experience for both tenants and property
            owners.
          </h1>

          <h1 className="font-SolidenTrialBoldExpanded text-2xl">
            Curated Selection
          </h1>
          <h1 className="font-SolidenTrialRegular 2xl:text-lg">
            Explore a carefully curated selection of rental properties, ranging
            from cozy apartments to spacious homes. We handpick properties that
            meet high-quality standards, ensuring that you have access to the
            best options available.
          </h1>

          <h1 className="font-SolidenTrialBoldExpanded text-2xl">
            User-Friendly Platform
          </h1>
          <h1 className="font-SolidenTrialRegular 2xl:text-lg">
            Our intuitive and user-friendly platform makes the search for your
            perfect rental a breeze. With advanced filtering options, you can
            easily narrow down your choices based on location, amenities, and
            other preferences, saving you time and effort.
          </h1>

          <h1 className="font-SolidenTrialBoldExpanded text-2xl">
            Flexible Rental Terms
          </h1>
          <h1 className="font-SolidenTrialRegular 2xl:text-lg">
            Our intuitive and user-friendly platform makes the search for your
            perfect rental a breeze. With advanced filtering options, you can
            easily narrow down your choices based on location, amenities, and
            other preferences, saving you time and effort.
          </h1>
        </div>
        <img
          src="../About/Hero.svg"
          alt="About Us"
          className="xl:w-[40%] 3xl:w-[30%]"
        />
      </div>
    </React.Fragment>
  );
};

export default About;
