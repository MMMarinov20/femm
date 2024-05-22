import React, { useEffect } from "react";
import { ApartmentDetails } from "../../data/lang/en/Property/Apartament";
import { AdvantageInterface } from "../../data/lang/en/Property/Apartament";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  Data: ApartmentDetails;
  Advantages: AdvantageInterface[];
  PageLang: {
    title: string;
    type: string[];
    bathrooms: string[];
    consists: string[];
  };
  Description: string;
  SubDescription: string;
}

const temp = ["fitst", "second", "third", "fourth"];

const Info: React.FC<Props> = ({
  Data,
  Advantages,
  PageLang,
  Description,
  SubDescription,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="w-screen px-4 lg:px-[10vw] py-20 flex flex-col gap-y-5">
        <h1
          className="font-SolidenTrialBoldExpanded text-4xl xl:text-5xl 3xl:text-6xl overflow-hidden max-w-[80vw]"
          data-aos="fade-right"
        >
          {Data.Description}
          <span className="underline text-green-600">{Data.Building}</span>
        </h1>
        <h1
          className="font-SolidenTrialRegular xl:text-lg"
          data-aos="fade-right"
        >
          {Description}
        </h1>

        <h1
          className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl 3xl:text-3xl"
          dangerouslySetInnerHTML={{ __html: SubDescription }}
          data-aos="fade-right"
        ></h1>

        <ul className="font-SolidenTrialRegular list-disc list-inside xl:text-lg">
          {PageLang.consists.map((consist, index) => (
            <li key={index} data-aos="fade-right">
              {consist}
            </li>
          ))}
          <li data-aos="fade-right">{PageLang.type[Data.Bedrooms - 1]}</li>
          <li data-aos="fade-right">
            {PageLang.bathrooms[Data.Bathrooms - 1]}
          </li>
        </ul>

        <h1
          className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl 3xl:text-3xl"
          data-aos="fade-right"
        >
          {PageLang.title}
        </h1>

        <ul className="font-SolidenTrialRegular list-disc list-inside xl:text-lg">
          {Advantages.map((advantage, index) => (
            <li key={index} data-aos="fade-right">
              {advantage.title}
            </li>
          ))}
        </ul>

        {/* <h1 className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl 3xl:text-3xl">
          Facilities in the complex:
        </h1>

        <ul className="font-SolidenTrialRegular list-disc list-inside xl:text-lg">
          <li>Swimming pool</li>
          <li>Children's playground</li>
          <li>Reception</li>
          <li>Security</li>
          <li>Landscaped courtyard</li>
          <li>Underground parking</li>
        </ul> */}
      </div>
    </React.Fragment>
  );
};

export default Info;
