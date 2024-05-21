import { PropertiesInterface } from "./Apartament";
import { FaLocationArrow } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { CgSmartphoneChip } from "react-icons/cg";
import { MdPrivacyTip } from "react-icons/md";
import { PiLightningFill } from "react-icons/pi";

export const properties: PropertiesInterface = {
  urbannature: {
    apartaments: [
      {
        id: 1,
        apartment: {
          Building: "Urban Nature",
          Address: "Angel Kanchev 32",
          Floor: 1,
          Floors: 2,
          Bedrooms: 1,
          Bathrooms: 2,
          Kitchen: "Yes",
          Area: 105.99,
          Parking: "No",
          Exposure: "South",
          Garage: "Yes",
        },
      },
      {
        id: 2,
        apartment: {
          Building: "Urban Nature",
          Address: "Angel Kanchev 32",
          Floor: 2,
          Floors: 1,
          Bedrooms: 2,
          Bathrooms: 1,
          Kitchen: "Yes",
          Area: 78.01,
          Parking: "No",
          Exposure: "South",
          Garage: "No",
        },
      },
      {
        id: 3,
        apartment: {
          Building: "Urban Nature",
          Address: "Angel Kanchev 32",
          Floor: 3,
          Floors: 1,
          Bedrooms: 2,
          Bathrooms: 1,
          Kitchen: "Yes",
          Area: 78.01,
          Parking: "No",
          Exposure: "South",
          Garage: "No",
        },
      },
      {
        id: 4,
        apartment: {
          Building: "Urban Nature",
          Address: "Angel Kanchev 32",
          Floor: 4,
          Floors: 2,
          Bedrooms: 2,
          Bathrooms: 2,
          Kitchen: "Yes",
          Area: 161.35,
          Parking: "No",
          Exposure: "South",
          Garage: "No",
        },
      },
    ],
    advantages: [
      {
        title: "Top location",
        description:
          "The building is located in Rousse's central district, close to the city's main street and the Danube river.",
        icon: FaLocationArrow,
      },
      {
        title: "Innovative building",
        description:
          "The building is designed and built with the latest technologies and materials.",
        icon: FaBuilding,
      },
      {
        title: "Modern design",
        description: "The building has a modern and stylish design.",
        icon: MdDesignServices,
      },
      {
        title: "Smart home ready",
        description: "The building is ready for smart home installations.",
        icon: CgSmartphoneChip,
      },
      {
        title: "Privacy matters",
        description:
          "The building is designed to provide maximum privacy for its residents with a private elevator.",
        icon: MdPrivacyTip,
      },
      {
        title: "Energy efficient",
        description: "The building is designed to be energy efficient.",
        icon: PiLightningFill,
      },
    ],
  },
};
