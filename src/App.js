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
import Lowtahun from "./pages/low/lowtahun";
import Kategori25 from "./pages/low/2025/kategori25";
import Jenjangofl25 from "./pages/low/2025/jenjangofl25";
import Jenjangonl25 from "./pages/low/2025/jenjangonl25";

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
            <Route path="/listofwinner" element={<Lowtahun/>} />
            <Route path="/kategori25" element={<Kategori25 />} />
            <Route path="/jenjangofl25" element={<Jenjangofl25 />} />
            <Route path="/jenjangonl25" element={<Jenjangonl25 />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
