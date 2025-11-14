import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Realm from "./Realm";
import Builds from "./pages/Builds.jsx";
import Skills from "./pages/Skills";
import About from "./pages/About";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/realm" element={<Realm />} />
      <Route path="/builds" element={<Builds />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
