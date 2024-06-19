import { PropertiesInterface } from "../../../Interfaces/IApartmentData";
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
          Description:
            "One bedroom apartment with a large terrace and a big basement in ",
          SubDescription:
            'The apartment is located on the first floor. Area <span style="font-family: GilroyRegular;">105.99</span> m². Consists of:',
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
          Description: "Two bedroom apartment with a south exposure ",
          SubDescription:
            'The apartment is located on the second floor. Area <span style="font-family: GilroyRegular;">78.01</span> m². Consists of:',
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
          Description: "Two bedroom apartment with a south exposure ",
          SubDescription:
            'The apartment is located on the second floor. Area <span style="font-family: GilroyRegular;">78.01</span> m². Consists of:',
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
          Description:
            "A two story penthouse with two bedrooms and a big terrace in ",
          SubDescription:
            'The apartment is located on the fourth floor. Area <span style="font-family: GilroyRegular;">161.35</span> m² sq.m. Consists of:',
        },
      },
    ],
    advantages: [
      {
        Title: "Top location",
        Description:
          "The building is located in Rousse's central district, close to the city's main street and the Danube river.",
        Icon: FaLocationArrow,
      },
      {
        Title: "Innovative building",
        Description:
          "The building is designed and built with the latest technologies and materials.",
        Icon: FaBuilding,
      },
      {
        Title: "Modern design",
        Description: "The building has a modern and stylish design.",
        Icon: MdDesignServices,
      },
      {
        Title: "Smart home ready",
        Description: "The building is ready for smart home installations.",
        Icon: CgSmartphoneChip,
      },
      {
        Title: "Privacy matters",
        Description:
          "The building is designed to provide maximum privacy for its residents with a private elevator.",
        Icon: MdPrivacyTip,
      },
      {
        Title: "Energy efficient",
        Description: "The building is designed to be energy efficient.",
        Icon: PiLightningFill,
      },
    ],
    Description:
      "FEMM presents a charming two-bedroom apartment in the Urban Nature complex. Nestled in the Central district, it offers convenient access to the city's main roads. Nearby attractions include a renowned sports complex, Galaxy Stadium, along with popular shopping destinations, a local market, entertainment venues, and a variety of dining options. Schools, parks, cafes, and fitness centers complete the lively surroundings of this vibrant neighborhood.",
  },
};
