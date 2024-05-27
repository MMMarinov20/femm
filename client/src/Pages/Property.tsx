import React, { useEffect, useState, Suspense } from "react";
const Landing = React.lazy(() => import("../Components/Property/Landing"));
const Info = React.lazy(() => import("../Components/Property/Info"));
// const Box = React.lazy(() => import("../Components/Property/Box"));
const Properties = React.lazy(
  () => import("../Components/Property/Properties")
);
const Advantage = React.lazy(() => import("../Components/Property/Advantage"));
const Footer = React.lazy(() => import("../Components/Home/Footer/Footer"));
const GallerySlider = React.lazy(
  () => import("../Components/Rental/GallerySlider")
);
const Location = React.lazy(() => import("../Components/Property/Location"));
import AOS from "aos";
import "aos/dist/aos.css";
import { AdvantageInterface } from "../data/Interfaces/IApartmentData.ts";
import { useSearchParams } from "react-router-dom";
import { IPropertyPage } from "../data/Interfaces/IPropertyPage.ts";
import LoadingSpinner from "../Components/LoadingSpinner.tsx";

const src = [
  "../Property/Carousel/1.svg",
  "../Property/Carousel/2.svg",
  "../Property/Carousel/3.svg",
  "../Property/Carousel/4.svg",
  "../Property/Carousel/5.svg",
  "../Property/Carousel/6.svg",
];

const Property = () => {
  const [searchParams] = useSearchParams();
  const [advantages, setAdvantages] = useState<AdvantageInterface[]>([]);
  const [pageLangData, setPageLangData] = useState<IPropertyPage | null>(null);

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);

    const property = window.location.pathname.split("/")[2];
    const findAdvantages = async () => {
      try {
        const { properties } = await import(
          `../data/lang/${searchParams.get("lang")}/Property/Properties.ts`
        );

        const data = await import(
          `../data/lang/${searchParams.get("lang")}/Property/property.json`
        );
        const obj = properties[property];
        setPageLangData(data.default[property]);
        setAdvantages(obj.advantages);
      } catch (error) {
        console.error("Error loading the Apartament data:", error);
      }
    };
    findAdvantages();
  }, [searchParams]);

  if (!pageLangData) return <LoadingSpinner />;
  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="overflow-hidden">
          <Landing Data={pageLangData.Landing} />
          <Info Data={pageLangData.Info} />
          <div className="min-h-screen flex flex-col items-center px-4 lg:px-[10vw]">
            {/* <h1
              className="font-SolidenTrialBoldExpanded text-3xl pb-2 md:text-5xl 2xl:text-6xl"
              data-aos="fade-right"
            >
              Facilities
            </h1>
            <h1
              className="font-SolidenTrialRegular text-center md:text-xl"
              data-aos="fade-right"
            >
              Like all complexes of Atlantis Bulgaria, the complex will provide
              a number of amenities to its customers
            </h1>

            <div className="w-full py-20 min-[350px]:px-10 grid grid-row-5 gap-y-10 place-items-center lg:grid-cols-2 xl:grid-cols-3">
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </div> */}

            <div className="w-screen px-0 overflow-hidden text-center">
              <h1
                className="font-SolidenTrialBoldExpanded text-3xl pb-10 md:text-5xl 2xl:text-6xl"
                data-aos="fade-right"
              >
                {pageLangData.Gallery.Title}
              </h1>
              <GallerySlider src={src} />
            </div>

            <Properties />

            <div className="min-h-fit pb-20">
              <h1
                dangerouslySetInnerHTML={{
                  __html: pageLangData.Advantages.Title,
                }}
                className="font-SolidenTrialBoldExpanded text-3xl px-4 text-center md:text-5xl 2xl:text-6xl overflow-hidden"
                data-aos="fade-right"
              ></h1>
              <div className="w-screen py-20 px-4 lg:px-[10vw] flex flex-col gap-y-10 items-center lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:place-items-center">
                {advantages.map((advantage, index) => (
                  <Advantage
                    key={index}
                    title={advantage.Title}
                    description={advantage.Description}
                    icon={advantage.Icon}
                  />
                ))}
              </div>
            </div>

            <Location />
            <Footer />
          </div>
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default Property;
