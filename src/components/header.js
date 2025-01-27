import React from 'react';
import './header.css';

function AppHeader() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <h1 className="logo">ShopSasa</h1>
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










