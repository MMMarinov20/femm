import React, { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Rental from "./Pages/Rental";
import Property from "./Pages/Property";
import Apartament from "./Pages/Apartament";
import About from "./Pages/About";
import { useUser } from "./hooks/useUser";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lang = searchParams.get("lang");

  useEffect(() => {
    if (!lang) {
      const language = navigator.language.split("-")[0];
      searchParams.set("lang", language);
      setSearchParams(searchParams, { replace: true });
    }
  }, [lang]);

  const { user } = useUser();
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rental/:id/:property" element={<Rental />} />
        <Route path="/property" element={<Property />} />
        <Route path="/property/:id" element={<Apartament />} />
        <Route path="/about" element={<About />} />
        {!user.id && <Route path="/login" element={<Login />} />}
        {!user.id && <Route path="/register" element={<Register />} />}
      </Routes>
    </React.Fragment>
  );
}

export default App;
