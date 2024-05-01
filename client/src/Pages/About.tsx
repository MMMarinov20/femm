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

      <div className="text-center bg-[#F9F2DF] pt-10 pb-20 px-4 overflow-hidden">
        <h1 className="font-SolidenTrialBoldExpanded text-5xl pb-3">
          About <span className="text-[#FF6241]">Us</span>
        </h1>
        <h1 className="font-SolidenTrialExpanded">
          At FEMM BULGARIA, our mission is to simplify your journey to finding
          the perfect apartment. With a commitment to excellence and a
          user-friendly platform, we strive to make your search for an ideal
          rental a seamless and enjoyable experience.
        </h1>
      </div>

      <div>
        <h1>Who We Are</h1>
        <h1>
          At FEMM BULGARIA, we specialize in connecting individuals with their
          ideal living spaces. Our platform is designed to simplify the rental
          process, offering a comprehensive range of services to ensure a
          seamless and enjoyable experience for both tenants and property
          owners.
        </h1>

        <h1>Curated Selection</h1>
        <h1>
          Explore a carefully curated selection of rental properties, ranging
          from cozy apartments to spacious homes. We handpick properties that
          meet high-quality standards, ensuring that you have access to the best
          options available.
        </h1>

        <h1>User-Friendly Platform</h1>
        <h1>
          Our intuitive and user-friendly platform makes the search for your
          perfect rental a breeze. With advanced filtering options, you can
          easily narrow down your choices based on location, amenities, and
          other preferences, saving you time and effort.
        </h1>

        <h1>Flexible Rental Terms</h1>
        <h1>
          Our intuitive and user-friendly platform makes the search for your
          perfect rental a breeze. With advanced filtering options, you can
          easily narrow down your choices based on location, amenities, and
          other preferences, saving you time and effort.
        </h1>
      </div>
    </React.Fragment>
  );
};

export default About;
