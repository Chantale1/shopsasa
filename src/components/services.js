import React from "react";
import "./services.css";
import { FaDesktop, FaChair, FaPrint, FaTint, FaTshirt } from "react-icons/fa";

// Services data
const servicesData = [
  { 
    title: "Supply of Computers & Accessories", 
    icon: <FaDesktop />, 
    bgColor: "#ffcc00", 
  },
  { 
    title: "Office Furniture, Stationery & Equipment", 
    icon: <FaChair />, 
    bgColor: "#cc8200", 
  },
  { 
    title: "Printing Papers, Printers & Toners", 
    icon: <FaPrint />, 
    bgColor: "#ff9800", 
  },
  { 
    title: "Mineral Distilled Drinking Water", 
    icon: <FaTint />, 
    bgColor: "#4caf50", 
  },
  { 
    title: "Delivery of Company Staff Uniforms", 
    icon: <FaTshirt />, 
    bgColor: "#00bcd4", 
  },
];

const Services = () => {
  return (
    <div className="services-block">
      <div className="title-holder">
        <h2>Our Services</h2>
        <p className="subtitle">We offer a variety of services to meet your business needs.</p>
      </div>

      {/* Floating Services List */}
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="service-item"
            style={{ 
              color: service.bgColor,
            }}
          >
            <span className="icon">{service.icon}</span>
            <p className="service-title">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

















