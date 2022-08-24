import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Submit from "./pages/submit/submit";
import About from "./pages/about/about";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </div>
  );
}
export default App;
