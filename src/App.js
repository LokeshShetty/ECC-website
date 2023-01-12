import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
// https://www.behance.net/gallery/136761949/Landing-Page-Design?tracking_source=search_projects%7Clanding%20page%20website

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
