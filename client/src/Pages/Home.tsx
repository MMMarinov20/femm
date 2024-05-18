import React, { useEffect, useState } from "react";
import Landing from "../Components/Home/Landing";
import About from "../Components/Home/About";
import Offer from "../Components/Home/Offer";
import Footer from "../Components/Home/Footer/Footer";
import { useSearchParams } from "react-router-dom";
import { HomeInterface } from "../data/lang/en/Home/Home";

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

  if (!homeData) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <Landing Data={homeData.Landing} />
        <About Data={homeData.About} />
        <Offer Data={homeData.Offer} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
