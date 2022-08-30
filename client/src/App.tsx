import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/pricing" element={<h1>Pricing</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </React.Fragment>
  );
};
export default App;
