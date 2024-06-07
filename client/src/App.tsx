import React, { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Rental from "./Pages/Rental";
import Property from "./Pages/Property";
import Apartament from "./Pages/Apartament";
import About from "./Pages/About";
import Success from "./Pages/Success";
import ErrorPage from "./Pages/Error";
import { useUser } from "./hooks/useUser";
import Verification from "./Pages/Verification";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lang = searchParams.get("lang");

  useEffect(() => {
    if (!lang) {
      const language = navigator.language.split("-")[0];
      // if (language !== "en") language = "en";
      searchParams.set("lang", language);
      setSearchParams(searchParams, { replace: true });
    }
  }, [lang, searchParams, setSearchParams]);

  const { user } = useUser();
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rental/:id/:property" element={<Rental />} />
        <Route path="/property/:name" element={<Property />} />
        <Route path="/property/:name/:id" element={<Apartament />} />
        <Route path="/about" element={<About />} />
        <Route path="/verification/:token" element={<Verification />} />
        <Route path="/success/:id" element={<Success />} />
        <Route path="*" element={<ErrorPage />} />
        {!user.id && <Route path="/login" element={<Login />} />}
        {!user.id && <Route path="/register" element={<Register />} />}
      </Routes>
    </React.Fragment>
  );
}

export default App;
