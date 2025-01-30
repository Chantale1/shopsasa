import React from 'react';
import logo from '../pictures/shopsasa.jpeg'; // Ensure the path to the logo is correct


function AppHeader({ onScrollToSection }) {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="ShopSasa Logo" className="logo-image" />
      </div> 
      
      <div className="nav">
        {/* Add scroll-to-home button to go to the Hero (Home) section */}
        <button className="navButton" onClick={() => onScrollToSection('home')}>Home</button>
        <button className="navButton" onClick={() => onScrollToSection('about')}>About</button>
        <button className="navButton" onClick={() => onScrollToSection('core-values')}>Core Values</button>
        <button className="navButton" onClick={() => onScrollToSection('services')}>Services</button>
      </div>
    </header>
  );
}

export default AppHeader;














