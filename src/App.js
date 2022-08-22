import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/home/home";
import Page2 from "./pages/about/about";
import Page3 from "./pages/submit/submit";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<Page2 />} />
        <Route path="/submit" element={<Page3 />} />
      </Routes>
    </div>
  );
}
export default App;
