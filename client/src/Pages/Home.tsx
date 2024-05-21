import React, { useEffect, useState, Suspense } from "react";
const Landing = React.lazy(() => import("../Components/Home/Landing"));
const About = React.lazy(() => import("../Components/Home/About"));
const Offer = React.lazy(() => import("../Components/Home/Offer"));
const Footer = React.lazy(() => import("../Components/Home/Footer/Footer"));
import { useSearchParams } from "react-router-dom";
import { HomeInterface } from "../data/lang/en/Home/Home";
import LoadingSpinner from "../Components/LoadingSpinner";

const Home = () => {
  const [searchParams] = useSearchParams();
  const [homeData, setHomeData] = useState<HomeInterface | null>(null);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const HomeModule = await import(
          `../data/lang/${searchParams.get("lang")}/Home/Home.json`
        );
        setHomeData(HomeModule.default);
      } catch (error) {
        console.error("Error loading the Home data:", error);
      }
    };

    loadHomeData();
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!homeData) return <LoadingSpinner />;

  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="overflow-hidden">
          <Landing Data={homeData.Landing} />
          <About Data={homeData.About} />
          <Offer Data={homeData.Offer} />
          <Footer />
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default Home;
