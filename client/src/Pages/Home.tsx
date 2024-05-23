import React, { useEffect, useState, Suspense } from "react";
const Landing = React.lazy(() => import("../Components/Home/Landing"));
const About = React.lazy(() => import("../Components/Home/About"));
const Offer = React.lazy(() => import("../Components/Home/Offer"));
const Footer = React.lazy(() => import("../Components/Home/Footer/Footer"));
import { useSearchParams } from "react-router-dom";
import { IHomePage } from "../data/Interfaces/IHomePage";
import LoadingSpinner from "../Components/LoadingSpinner";

const Home = () => {
  const [searchParams] = useSearchParams();
  const [pageLangData, setPageLangData] = useState<IHomePage | null>(null);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const HomeModule = await import(
          `../data/lang/${searchParams.get("lang")}/Home/Home.json`
        );
        setPageLangData(HomeModule.default);
      } catch (error) {
        console.error("Error loading the Home data:", error);
      }
    };

    loadHomeData();
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!pageLangData) return <LoadingSpinner />;

  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="overflow-hidden">
          <Landing Data={pageLangData.Landing} />
          <About Data={pageLangData.About} />
          <Offer Data={pageLangData.Offer} />
          <Footer />
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default Home;
