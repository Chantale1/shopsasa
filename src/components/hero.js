import React from 'react';
import './hero.css';
import { FaChair, FaPenFancy, FaLaptop, FaBriefcase, FaFileAlt, FaPrint, FaLightbulb } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="hero-container">
      <div className="hero-text">
        <h1>Welcome to <span style={{ color: "#000" }}>Shopsasa</span></h1>
        <p>
          We deal with <span style={{ fontWeight: "600", color: "#000" }}>general supplies of stationery</span>, 
          <span style={{ fontWeight: "600", color: "#000" }}> office equipment, office furniture</span>, and 
          <span style={{ fontWeight: "600", color: "#000" }}> other supplies</span> designed for success!
        </p>

        {/* Icons for categories */}
        <div className="hero-icons">
          <div className="icon"><FaChair /></div> {/* Office Furniture */}
          <div className="icon"><FaPenFancy /></div> {/* Stationery */}
          <div className="icon"><FaLaptop /></div> {/* Office Equipment */}
          <div className="icon"><FaBriefcase /></div> {/* Office Supplies */}
          <div className="icon"><FaFileAlt /></div> {/* Documents */}
          <div className="icon"><FaPrint /></div> {/* Printers */}
          <div className="icon"><FaLightbulb /></div> {/* Office Lighting */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
















