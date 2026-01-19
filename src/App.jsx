// App.jsx
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";

import Home from "./components/pages/home/home.jsx";
import About from "./components/pages/about/about.jsx";
import Services from "./components/pages/services/services.jsx";
import Contact from "./components/pages/contact/contact.jsx";
import Faq from "./components/pages/faq/faq.jsx";
import Empowerment from "./components/pages/empowerment/empowerment.jsx"


import ComingSoon from "./components/coming-soon/comingSoon.jsx";

import "./App.css";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" 
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/faq" element={<Faq />} />
                      <Route path="/empowerment" element={<Empowerment />} />

      
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}
