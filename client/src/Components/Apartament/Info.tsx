import React from "react";

const Info: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-screen px-4 lg:px-[10vw] py-20 flex flex-col gap-y-5">
        <h1 className="font-SolidenTrialBoldExpanded text-4xl xl:text-5xl 3xl:text-6xl overflow-hidden max-w-[80vw]">
          Two-bedroom Apartment With Southern Exposure In Atlantis Aria
        </h1>
        <h1 className="font-SolidenTrialRegular xl:text-lg">
          I Estates offers to your attention a beautiful two-bedroom apartment
          in the Atlantis Aria complex. The complex is located in the Izgrev
          district, in close proximity to the main roads of the city, the
          largest sports complex in Bulgaria - Arena Burgas, hypermarkets
          Kaufland, Lidl, Technopolis, Metro, shopping and business centers, a
          bus stop, schools, kindergartens , university, cafes and restaurants,
          fitness centers, etc.
        </h1>

        <h1 className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl 3xl:text-3xl">
          The apartment is located on the sixth floor. Area{" "}
          <span className="font-GilroyExtraBold">102.74</span> sq.m. Consists
          of:
        </h1>

        <ul className="font-SolidenTrialRegular list-disc list-inside xl:text-lg">
          <li>Corridor</li>
          <li>Living room with kitchenette</li>
          <li>Two bedrooms</li>
          <li>Bathroom with toilet</li>
          <li>Separate toilet</li>
          <li>Two terraces</li>
        </ul>

        <h1 className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl 3xl:text-3xl">
          Advantages of your new home:
        </h1>

        <ul className="font-SolidenTrialRegular list-disc list-inside xl:text-lg">
          <li>Quality construction</li>
          <li>Modern architecture</li>
          <li>Functionally distributed living area</li>
          <li>Excellent location</li>
          <li>Easy access to the city center</li>
          <li>Close to schools, kindergartens, shops, etc.</li>
        </ul>

        <h1 className="font-SolidenTrialBoldExpanded text-xl xl:text-2xl 3xl:text-3xl">
          Facilities in the complex:
        </h1>

        <ul className="font-SolidenTrialRegular list-disc list-inside xl:text-lg">
          <li>Swimming pool</li>
          <li>Children's playground</li>
          <li>Reception</li>
          <li>Security</li>
          <li>Landscaped courtyard</li>
          <li>Underground parking</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Info;