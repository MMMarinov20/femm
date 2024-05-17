import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import BurgerNavbar from "../Components/Home/Navbar/BurgerNavbar";
import Footer from "../Components/Home/Footer/Footer";

const About = () => {
  return (
    <React.Fragment>
      <div className="overflow-hidden">
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
              At FEMM BULGARIA, we specialize in connecting individuals with
              their ideal living spaces. Our platform is designed to simplify
              the rental process, offering a comprehensive range of services to
              ensure a seamless and enjoyable experience for both tenants and
              property owners.
            </h1>

            <h1 className="font-SolidenTrialBoldExpanded text-2xl">
              Curated Selection
            </h1>
            <h1 className="font-SolidenTrialRegular 2xl:text-lg">
              Explore a carefully curated selection of rental properties,
              ranging from cozy apartments to spacious homes. We handpick
              properties that meet high-quality standards, ensuring that you
              have access to the best options available.
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

        <div className="bg-[#F9F3DF] w-screen">
          <div className="py-32 px-4 lg:px-[10vw] space-y-10 md:flex md:flex-col md:items-center lg:flex-row lg:gap-x-10 lg:justify-between lg:items-center">
            <div className="space-y-5">
              <h1 className="font-SolidenTrialBoldExpanded text-4xl xl:text-5xl">
                What We Do
              </h1>

              <h1 className="font-SolidenTrialRegular xl:text-lg xl:max-w-lg">
                At FEMM BULGARIA, our mission is to simplify your journey to
                finding the perfect apartment. With a commitment to excellence
                and a user-friendly platform, we strive to make your search for
                an ideal rental a seamless and enjoyable experience.
              </h1>

              <h1 className="font-SolidenTrialRegular xl:text-lg xl:max-w-lg">
                Explore a diverse range of apartments that cater to your unique
                preferences and lifestyle. Whether you're looking for a cozy
                studio, a spacious family home, or a stylish urban loft, our
                curated selection ensures that you'll find a place that feels
                just right.
              </h1>
            </div>

            <img
              src="../About/WhatWeDo.svg"
              alt="What We Do"
              className="w-full md:w-1/2 xl:w-[40%] 2xl:w-[40%]"
            />
          </div>
        </div>

        <div className="w-screen px-4 py-20 space-y-10 lg:flex lg:justify-between lg:items-center lg:px-[10vw]">
          <div className="space-y-5 lg:w-1/2">
            <h1 className="font-SolidenTrialBoldExpanded text-4xl xl:text-5xl">
              Our Mission
            </h1>

            <h1 className="font-SolidenTrialRegular 2xl:max-w-lg xl:text-lg">
              At FEMM BULGARIA, our mission is clear—to simplify and enhance the
              journey of finding and securing rental properties. We strive to
              provide a platform that empowers tenants and property owners
              alike, fostering a community built on trust, transparency, and
              convenience.
            </h1>

            <h1 className="font-SolidenTrialRegular 2xl:max-w-lg xl:text-lg">
              At FEMM BULGARIA, our mission is clear—to simplify and enhance the
              journey of finding and securing rental properties. We strive to
              provide a platform that empowers tenants and property owners
              alike, fostering a community built on trust, transparency, and
              convenience.
            </h1>
          </div>

          <div className="px-10 space-y-10 lg:space-y-0 flex flex-col justify-center items-center lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
            <div className="p-5 2xl:py-10 shadow-2xl space-y-3 rounded-xl sm:w-1/2 sm:h-1/2 lg:w-full lg:h-fit">
              <img src="../About/Icon.svg" alt="Icon" />
              <h1 className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl">
                Empowering Choices
              </h1>
              <h1 className="font-SolidenTrialRegular max-w-xs xl:text-lg">
                Find a home that hits the sweet spot between great quality.
              </h1>
            </div>

            <div className="p-5 2xl:py-10 shadow-2xl space-y-3 rounded-xl sm:w-1/2 sm:h-1/2 lg:w-full lg:h-fit">
              <img src="../About/Icon.svg" alt="Icon" />
              <h1 className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl">
                Empowering Choices
              </h1>
              <h1 className="font-SolidenTrialRegular max-w-xs xl:text-lg">
                Find a home that hits the sweet spot between great quality.
              </h1>
            </div>

            <div className="p-5 2xl:py-10 shadow-2xl space-y-3 rounded-xl sm:w-1/2 sm:h-1/2 lg:w-full lg:h-fit">
              <img src="../About/Icon.svg" alt="Icon" />
              <h1 className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl">
                Empowering Choices
              </h1>
              <h1 className="font-SolidenTrialRegular max-w-xs xl:text-lg">
                Find a home that hits the sweet spot between great quality.
              </h1>
            </div>

            <div className="p-5 2xl:py-10 shadow-2xl space-y-3 rounded-xl sm:w-1/2 sm:h-1/2 lg:w-full lg:h-fit">
              <img src="../About/Icon.svg" alt="Icon" />
              <h1 className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl">
                Empowering Choices
              </h1>
              <h1 className="font-SolidenTrialRegular max-w-xs xl:text-lg">
                Find a home that hits the sweet spot between great quality.
              </h1>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default About;
