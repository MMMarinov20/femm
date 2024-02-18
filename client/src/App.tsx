import React from "react";
import BurgerNavbar from "./Components/Navbar/BurgerNavbar";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <div className="w-screen min-h-screen bg-[#F9F3DF]">
        <Navbar />
        <BurgerNavbar />
      </div>
    </React.Fragment>
  );
}

export default App;
