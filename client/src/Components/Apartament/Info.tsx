import React, { useEffect } from "react";
import { ApartmentDetails } from "../../data/lang/en/Property/Apartament";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  Data: ApartmentDetails;
}

const temp = ["fitst", "second", "third", "fourth"];

const Info: React.FC<Props> = ({ Data }) => {
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
          {Data.Bedrooms == 1 ? "One-bedroom" : "Two-bedroom"} Apartment With
          Southern Exposure In{" "}
          <span className="underline text-green-600">{Data.Building}</span>
        </h1>
        <h1
          className="font-SolidenTrialRegular xl:text-lg"
          data-aos="fade-right"
        >
          I Estates offers to your attention a beautiful two-bedroom apartment
          in the Atlantis Aria complex. The complex is located in the Izgrev
          district, in close proximity to the main roads of the city, the
          largest sports complex in Bulgaria - Arena Burgas, hypermarkets
          Kaufland, Lidl, Technopolis, Metro, shopping and business centers, a
          bus stop, schools, kindergartens , university, cafes and restaurants,
          fitness centers, etc.
        </h1>

        <h1
          className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl 3xl:text-3xl"
          data-aos="fade-right"
        >
          The apartment is located on the {temp[Data.Floor - 1]} floor. Area{" "}
          <span className="font-GilroyExtraBold">{Data.Area}</span>&sup2; sq.m.
          Consists of:
        </h1>

        <ul className="font-SolidenTrialRegular list-disc list-inside xl:text-lg">
          <li data-aos="fade-right">Corridor</li>
          <li data-aos="fade-right">Living room with kitchenette</li>
          <li data-aos="fade-right">
            {Data.Bedrooms == 1 ? "One bedroom" : "Two bedrooms"}
          </li>
          <li data-aos="fade-right">
            {Data.Bathrooms == 1 ? "One bathroom" : "Two bathroom"} with toilet
          </li>
          <li data-aos="fade-right">Two terraces</li>
        </ul>

        <h1
          className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl 3xl:text-3xl"
          data-aos="fade-right"
        >
          Advantages of your new home:
        </h1>

        <ul className="font-SolidenTrialRegular list-disc list-inside xl:text-lg">
          <li data-aos="fade-right">Quality construction</li>
          <li data-aos="fade-right">Modern architecture</li>
          <li data-aos="fade-right">Functionally distributed living area</li>
          <li data-aos="fade-right">Excellent location</li>
          <li data-aos="fade-right">Easy access to the city center</li>
          <li data-aos="fade-right">
            Close to schools, kindergartens, shops, etc.
          </li>
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
