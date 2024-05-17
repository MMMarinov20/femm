import React, { useEffect } from "react";
import Landing from "../Components/Home/Landing";
import About from "../Components/Home/About";
import Offer from "../Components/Home/Offer";
import Footer from "../Components/Home/Footer/Footer";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <Landing />
        <About />
        <Offer />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Home;
