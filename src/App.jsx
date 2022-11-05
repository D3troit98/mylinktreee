import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <div className="app_container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
