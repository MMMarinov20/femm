import React, { useEffect, useState, Suspense } from "react";
const Navbar = React.lazy(() => import("../Components/Home/Navbar/Navbar"));
const BurgerNavbar = React.lazy(
  () => import("../Components/Home/Navbar/BurgerNavbar")
);
const Landing = React.lazy(() => import("../Components/Apartament/Landing"));
const Info = React.lazy(() => import("../Components/Apartament/Info"));
const Advantage = React.lazy(() => import("../Components/Property/Advantage"));
const Form = React.lazy(() => import("../Components/Apartament/Form"));
const Footer = React.lazy(() => import("../Components/Home/Footer/Footer"));
const Properties = React.lazy(
  () => import("../Components/Property/Properties.tsx")
);
// import Box from "../Components/Property/Box";
import {
  Apartment,
  AdvantageInterface,
} from "../data/lang/en/Property/Apartament.ts";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner.tsx";

const Apartament = () => {
  const [searchParams] = useSearchParams();
  const [apartamentData, setApartamentData] = useState<Apartment | undefined>(
    undefined
  );
  const [advantages, setAdvantages] = useState<AdvantageInterface[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const property = window.location.pathname.split("/")[2];
    const id = window.location.pathname.split("/")[3];
    const findApartament = async () => {
      try {
        const { properties } = await import(
          `../data/lang/${searchParams.get("lang")}/Property/Properties.ts`
        );

        const obj = properties[property];
        const apartament: Apartment = obj.apartaments.find(
          (apartament: any) => apartament.id === parseInt(id)
        )!;

        if (apartament) setApartamentData(apartament);
        setAdvantages(obj.advantages);
      } catch (error) {
        console.error("Error loading the Apartament data:", error);
      }
    };
    findApartament();
  }, [searchParams]);

  useEffect(() => {
    console.log(apartamentData);
  }, [apartamentData]);

  if (!apartamentData || !advantages) return <LoadingSpinner />;

  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="overflow-hidden">
          <Navbar />
          <BurgerNavbar color="#FFFFFF" />
          <Landing Data={apartamentData.apartment} />
          <Info Data={apartamentData.apartment} />

          <div className="min-h-screen flex flex-col items-center px-4 lg:px-[10vw]">
            {/* <h1 className="font-SolidenTrialBoldExpanded text-3xl pb-2 md:text-5xl 2xl:text-6xl">
            Facilities
          </h1>
          <h1 className="font-SolidenTrialRegular text-center md:text-xl">
            Like all complexes of Atlantis Bulgaria, the complex will provide a
            number of amenities to its customers
          </h1>

          <div className="w-full py-20 min-[350px]:px-10 grid grid-row-5 gap-y-10 place-items-center lg:grid-cols-2 xl:grid-cols-3">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </div> */}

            <div className="min-h-fit pb-20">
              <h1 className="font-SolidenTrialBoldExpanded text-3xl px-4 text-center md:text-5xl 2xl:text-6xl overflow-hidden">
                Advantages Of Your <span className="text-[#FF6241]">New</span>{" "}
                Home
              </h1>
              <div className="w-screen py-20 px-4 lg:px-[10vw] flex flex-col gap-y-10 items-center lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:place-items-center">
                {advantages.map((advantage, index) => (
                  <Advantage
                    key={index}
                    title={advantage.title}
                    description={advantage.description}
                    icon={advantage.icon}
                  />
                ))}
              </div>
            </div>
          </div>
          <Properties />
          <Form />
          <Footer />
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default Apartament;
