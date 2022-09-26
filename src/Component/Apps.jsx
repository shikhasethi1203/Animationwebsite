import React from "react";
 import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route,Navigate } from "react-router-dom";
const Apps = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/"/>}/>
        {/* <Home/> */}
      </Routes>
      <Footer/>
    </>
  );
};

export default Apps;
