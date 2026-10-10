import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import RouteEffects from "./components/RouteEffects";
import Realm from "./pages/Realm.jsx";
import Builds from "./pages/Builds.jsx";
import Skills from "./pages/Skills.jsx";
import About from "./pages/About.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/realm" element={<Realm />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Realm />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
