import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Rental from "./Pages/Rental";
import Property from "./Pages/Property";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/property" element={<Property />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
