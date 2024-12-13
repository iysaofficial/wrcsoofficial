import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// import Abouts from "./pages/Abouts";
import Faqs from "./pages/Faqs";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/About" element={<Abouts />} />\ */}
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
