import React from "react";
import "./services.css";
import { FaDesktop, FaChair, FaPrint, FaTint, FaTshirt } from "react-icons/fa";

// Importing images
import LeftImage from '/home/chantale/shopsasa/shopsasa/src/pictures/Colorful_Illustrative_Digital_Innovation_Presentation-removebg-preview.png';
import RightImage from '/home/chantale/shopsasa/shopsasa/src/pictures/Number.png';

const servicesData = [
  { 
    title: "Supply of Computers & Accessories", 
    icon: <FaDesktop />, 
    bgColor: "#000", 
    font: "'Poppins', sans-serif" 
  },
  { 
    title: "Office Furniture, Stationery & Equipment", 
    icon: <FaChair />, 
    bgColor: "#000", 
    font: "'Roboto', sans-serif" 
  },
  { 
    title: "Printing Papers, Printers & Toners", 
    icon: <FaPrint />, 
    bgColor: "#000", 
    font: "'Merriweather', serif" 
  },
  { 
    title: "Mineral Distilled Drinking Water", 
    icon: <FaTint />, 
    bgColor: "#000", 
    font: "'Lobster', cursive" 
  },
  { 
    title: "Delivery of Company Staff Uniforms", 
    icon: <FaTshirt />, 
    bgColor: "#000", 
    font: "'Montserrat', sans-serif" 
  },
];

const Services = () => {
  return (
    <div className="services-block">
      <div className="title-holder">
        <h2>Our Services</h2>
        <p className="subtitle">We offer a variety of services to meet your business needs.</p>
      </div>

      {/* Slanted Services Container */}
      <div className="services-container">
        {/* Services List */}
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-item" 
              style={{ 
                backgroundColor: service.bgColor, 
                fontFamily: service.font, 
              }}
            >
              <span className="icon">{service.icon}</span>
              <p>{service.title}</p>
            </div>
          ))}
        </div>

        {/* Images on the sides */}
        <div className="service-side-images">
          <img src={LeftImage} alt="Left" className="left-image" />
          <img src={RightImage} alt="Right" className="right-image" />
        </div>
      </div>
    </div>
  );
};

export default Services;














