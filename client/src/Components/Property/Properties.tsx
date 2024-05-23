import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IOtherData } from "../../data/Interfaces/IOtherData";
import LoadingSpinner from "../LoadingSpinner";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [property, setProperty] = useState<string>("");
  const [pageLandData, setPageLangData] = useState<IOtherData | null>(null);
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
    setProperty(window.location.pathname.split("/")[2]);
  }, []);

  useEffect(() => {
    const findData = async () => {
      try {
        const data = await import(
          `../../data/lang/${searchParams.get("lang")}/other.json`
        );
        setPageLangData(data.default);
      } catch (error) {
        console.error("Error loading the Property data:", error);
      }
    };
    findData();
  });

  if (!pageLandData) return <LoadingSpinner />;
  return (
    <React.Fragment>
      <div className="min-h-fit w-screen bg-[#F9F2DF] py-20 my-20">
        <div className="flex flex-col items-center w-full h-full">
          <h1
            className="font-SolidenTrialBoldExpanded text-3xl pb-10 md:text-5xl 2xl:text-6xl"
            data-aos="fade-right"
          >
            {pageLandData.propertyTitle}
          </h1>
          <div className="flex flex-col gap-y-10 px-4 md:grid md:grid-rows-2 md:grid-cols-2 xl:grid-cols-3 lg:px-[10vw] lg:gap-x-10 w-full">
            {[...Array(4)].map((_, index) => (
              <Link
                to={`/property/${property}/${index + 1}`}
                className="w-full"
                data-aos="fade-right"
                key={index}
              >
                <img
                  src={`../../Property/Properties/${index + 1}.svg`}
                  alt="Property"
                  key={index}
                  className="w-full h-full rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Properties;
