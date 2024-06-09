import { LuKeySquare } from "react-icons/lu";
import { GiResize } from "react-icons/gi";
import { IoWifiOutline, IoLogoNoSmoking } from "react-icons/io5";
import { MdOutlinePool, MdBalcony } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { TbAirConditioning } from "react-icons/tb";
import { GiShower } from "react-icons/gi";
import { CiWifiOn } from "react-icons/ci";
import { PiSwimmingPoolThin } from "react-icons/pi";
import { MdOutlineSmokeFree } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";

const rentalsData = {
  rentals: [
    {
      Id: 1,
      Title: "Loli's beach studio",
      Location:
        '16"Manastirska" str, building B B-09A, Sarafovo, Sarafovo, Burgas, Bulgaria',
      Features: [
        [
          {
            Icon: LuKeySquare,
            Feature: "Whole studio",
          },
          {
            Icon: GiResize,
            Feature: "24m² size",
          },
          {
            Icon: IoWifiOutline,
            Feature: "Free WiFi",
          },
          {
            Icon: IoLogoNoSmoking,
            Feature: "Non-smoking rooms",
          },
          {
            Icon: MdOutlinePool,
            Feature: "Outdoor pool",
          },
          {
            Icon: GrOverview,
            Feature: "Lovely view",
          },
          {
            Icon: TbAirConditioning,
            Feature: "Air conditioner",
          },
          {
            Icon: GiShower,
            Feature: "Shower",
          },
          {
            Icon: MdBalcony,
            Feature: "Balcony",
          },
        ],
      ],
      Description:
        "Located in the Sarafovo district of Burgas, Loli's Beach Studio offers accommodation with a private pool, free WiFi, 24-hour security and an ATM. The air-conditioned accommodation is 300 meters from Sarafovo Central Beach. The apartment has 1 bedroom, 1 bathroom, bed linen, towels, a flat-screen TV with streaming access, a fully equipped kitchenette, and a balcony with garden views. Guests can make use of the sun terrace or enjoy fishing in the area. FEMM Bulgaria Beach is 400 meters from Loli's Beach Studio, while Aviation Museum is 1.7 km away. The nearest airport is Burgas, located 2 km away.",
      Rating: 9.4,
      Showcase: [
        {
          Title: "Wi-Fi",
          Icon: CiWifiOn,
        },
        {
          Title: "Swimming pool",
          Icon: PiSwimmingPoolThin,
        },
        {
          Title: "Non-smoking room",
          Icon: MdOutlineSmokeFree,
        },
        {
          Title: "Kitchen",
          Icon: FaKitchenSet,
        },
      ],
      Surroundings: {
        Beaches: [{ Title: "beach", Distance: "150m" }],
        Parks: [{ Title: "beach", Distance: "150m" }],
        Restaurants: [{ Title: "beach", Distance: "150m" }],
        Airports: [{ Title: "beach", Distance: "150m" }],
        Shops: [{ Title: "beach", Distance: "150m" }],
        Clubs: [{ Title: "beach", Distance: "150m" }],
      },
      Faq: [
        { Question: "this is a question", Answer: "this is an answer" },
        { Question: "this is a question", Answer: "this is an answer" },
      ],
    },
  ],
};

export default rentalsData;
