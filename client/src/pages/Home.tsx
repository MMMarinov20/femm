import React from "react";
import Navbar from "../components/Navbar/Navbar";
const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="ml-5 pl-5 pr-5">
        <img src="src/assets/hero.svg" alt="" className="w-screen" />
      </div>
    </React.Fragment>
  );
};

export default Home;
