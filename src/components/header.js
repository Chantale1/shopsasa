import React from 'react';
import logo from '../pictures/shopsasa1.jpeg'; // Ensure the path is correct
import './header.css';

function AppHeader() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      {/* Logo on the far left */}
      <div className="logo">
        <img src={logo} alt="ShopSasa Logo" className="logo-image" />
      </div>
      {/* Spread-out Navigation Buttons */}
      <nav className="nav">
        <button className="navButton" onClick={() => scrollToSection('home')}>Home</button>
        <button className="navButton" onClick={() => scrollToSection('about')}>About</button>
        <button className="navButton" onClick={() => scrollToSection('core-values')}>Core Values</button>
        <button className="navButton" onClick={() => scrollToSection('services')}>Services</button>
      </nav>
    </header>
  );
}

export default AppHeader;













