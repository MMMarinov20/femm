import { LuKeySquare } from "react-icons/lu";
import { GiResize } from "react-icons/gi";
import { IoWifiOutline, IoLogoNoSmoking } from "react-icons/io5";
import { MdOutlinePool, MdBalcony } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { TbAirConditioning } from "react-icons/tb";
import { GiShower } from "react-icons/gi";

const rentalsData = {
  rentals: [
    {
      id: 1,
      title: "Loli's beach studio",
      location:
        '16"Manastirska" str, building B B-09A, Sarafovo, Sarafovo, Burgas, Bulgaria',
      features: [
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
      description:
        "Located in the Sarafovo district of Burgas, Loli's Beach Studio offers accommodation with a private pool, free WiFi, 24-hour security and an ATM. The air-conditioned accommodation is 300 meters from Sarafovo Central Beach. The apartment has 1 bedroom, 1 bathroom, bed linen, towels, a flat-screen TV with streaming access, a fully equipped kitchenette, and a balcony with garden views. Guests can make use of the sun terrace or enjoy fishing in the area. Atlantis Beach is 400 meters from Loli's Beach Studio, while Aviation Museum is 1.7 km away. The nearest airport is Burgas, located 2 km away.",
      rating: 9.4,
      surroundings: {
        Beaches: [{ title: "beach", distance: "150m" }],
        Parks: [{ title: "beach", distance: "150m" }],
        Restaurants: [{ title: "beach", distance: "150m" }],
        Airports: [{ title: "beach", distance: "150m" }],
        Shops: [{ title: "beach", distance: "150m" }],
        Clubs: [{ title: "beach", distance: "150m" }],
      },
      faq: [
        { question: "this is a question", answer: "this is an answer" },
        { question: "this is a question", answer: "this is an answer" },
      ],
    },
  ],
};

export default rentalsData;
