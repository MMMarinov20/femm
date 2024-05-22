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
        title: "Топ локация",
        description:
          "Сградата се намира в централния район на Русе, близо до главната улица на града и река Дунав.",
        icon: FaLocationArrow,
      },
      {
        title: "Иновативно строителство",
        description:
          "Сградата е проектирана и построена с най-новите технологии и материали.",
        icon: FaBuilding,
      },
      {
        title: "Модерен дизайн",
        description:
          "Сградата има модерен дизайн и високо качество на строителство.",
        icon: MdDesignServices,
      },
      {
        title: "Смарт хоум готовност",
        description: "Сградата е готова за инсталация на смарт хоум системи.",
        icon: CgSmartphoneChip,
      },
      {
        title: "Максимална поверителност",
        description:
          "Сградата е проектирана с максимална поверителност и сигурност за живущите в нея, като разполага и с частен асансьор.",
        icon: MdPrivacyTip,
      },
      {
        title: "Енергийно ефективен",
        description: "Сградата притежава клас А на енергийна ефективност.",
        icon: PiLightningFill,
      },
    ],
  },
};
