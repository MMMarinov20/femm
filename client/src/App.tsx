import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Rental from "./Pages/Rental";
import Property from "./Pages/Property";
import Apartament from "./Pages/Apartament";
import About from "./Pages/About";
import { useUser } from "./hooks/useUser";

function App() {
  useEffect(() => {
    const userLanguage = navigator.language;
    console.log(userLanguage);
  }, []);

  const { user } = useUser();
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rental/:id/:property" element={<Rental />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property/:id" element={<Apartament />} />
          <Route path="/about" element={<About />} />
          {!user.id && <Route path="/login" element={<Login />} />}
          {!user.id && <Route path="/register" element={<Register />} />}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
