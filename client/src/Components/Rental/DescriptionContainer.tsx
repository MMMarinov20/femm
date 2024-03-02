import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GiShower } from "react-icons/gi";

const DescriptionContainer: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-full h-fit bg-white shadow-2xl rounded-2xl p-5 flex flex-col gap-y-3 md:text-lg">
        <h1 className="font-SolidenTrialBoldExpanded text-2xl md:text-4xl">
          Loli's beach studio
        </h1>

        <h1 className="inline-flex">
          <FaLocationDot className="text-xl mr-1 text-[#FF6241]" />
          16"Manastirska" str, building B B-09A, Sarafovo, Sarafovo, Burgas,
          Bulgaria
        </h1>

        <button className="w-[40%] bg-[#FF6241] py-3 text-white font-SolidenTrialRegular rounded-lg text-xs md:text-base transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]">
          Book a Stay
        </button>

        <div className="flex flex-col gap-y-3 py-2">
          <h1 className="inline-flex">
            <GiShower className="text-xl mr-1 text-[#FF6241]" />
            Swimming pool
          </h1>
          <h1 className="inline-flex">
            <GiShower className="text-xl mr-1 text-[#FF6241]" />
            Swimming pool
          </h1>
          <h1 className="inline-flex">
            <GiShower className="text-xl mr-1 text-[#FF6241]" />
            Swimming pool
          </h1>
          <h1 className="inline-flex">
            <GiShower className="text-xl mr-1 text-[#FF6241]" />
            Swimming pool
          </h1>
          <h1 className="inline-flex">
            <GiShower className="text-xl mr-1 text-[#FF6241]" />
            Swimming pool
          </h1>
          <h1 className="inline-flex">
            <GiShower className="text-xl mr-1 text-[#FF6241]" />
            Swimming pool
          </h1>
          <h1 className="inline-flex">
            <GiShower className="text-xl mr-1 text-[#FF6241]" />
            Swimming pool
          </h1>
          <h1 className="inline-flex">
            <GiShower className="text-xl mr-1 text-[#FF6241]" />
            Swimming pool
          </h1>
          <h1 className="inline-flex">
            <GiShower className="text-xl mr-1 text-[#FF6241]" />
            Swimming pool
          </h1>
          <h1 className="inline-flex">
            <GiShower className="text-xl mr-1 text-[#FF6241]" />
            Swimming pool
          </h1>
        </div>

        <h1 className="font-GilroyRegular">
          Located in the Sarafovo district of Burgas, Loli's Beach Studio offers
          accommodation with a private pool, free WiFi, 24-hour security and an
          ATM. The air-conditioned accommodation is 300 meters from Sarafovo
          Central Beach. The apartment has 1 bedroom, 1 bathroom, bed linen,
          towels, a flat-screen TV with streaming access, a fully equipped
          kitchenette, and a balcony with garden views. Guests can make use of
          the sun terrace or enjoy fishing in the area. Atlantis Beach is 400
          meters from Loli's Beach Studio, while Aviation Museum is 1.7 km away.
          The nearest airport is Burgas, located 2 km away.
        </h1>

        <h1 className="font-GilroyExtraBold md:text-xl">
          Couples Love The Location - They Rate It{" "}
          <span className="text-[#FF6241]">9.4</span> For a Trip For Two.
        </h1>

        <h1 className="font-GilroyRegular">
          Distance in accommodation descriptions is calculated using ©
          OpenStreetMap
        </h1>

        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <div className="w-full h-32 border-[1px] border-[#464646] rounded-2xl"></div>
          <div className="w-full h-32 border-[1px] border-[#464646] rounded-2xl"></div>
          <div className="w-full h-32 border-[1px] border-[#464646] rounded-2xl"></div>
          <div className="w-full h-32 border-[1px] border-[#464646] rounded-2xl"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DescriptionContainer;
