import React from "react";
import Landing from "../Components/Home/Landing";
import About from "../Components/Home/About";
import Offer from "../Components/Home/Offer";
import Footer from "../Components/Home/Footer";
function Home() {
  return (
    <React.Fragment>
      <Landing />
      <About />
      <Offer />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
