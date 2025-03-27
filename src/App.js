import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// import Abouts from "./pages/Abouts";
import Faqs from "./pages/Faqs";
import Contacts from "./pages/Contacts";


import HomeRegist from './pages/registration/homeregist';
import HomeIndo from './pages/registration/homeindo';
import IndonesiaOffline from './pages/registration/indo-offline';
import IndonesiaOnline from './pages/registration/indo-online';
import HomeInter from './pages/registration/homeinter';
import InternationalOffline from './pages/registration/inter-offline';
import InternationalOnline from './pages/registration/inter-online';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/About" element={<Abouts />} />\ */}
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Contacts" element={<Contacts />} />


          <Route path="/homeregist" element={<HomeRegist/>} />
            <Route path="/homeindo" element={<HomeIndo/>} />
            <Route path="/indooffline" element={<IndonesiaOffline/>} />
            <Route path="/indoonline" element={<IndonesiaOnline/>} />
            <Route path="/homeinter" element={<HomeInter/>} />
            <Route path="/interoffline" element={<InternationalOffline/>} />
            <Route path="/interonline" element={<InternationalOnline/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
