// Hero.js
import React from 'react';
import './hero.css'; // Import the CSS for styling
import homepageImage from '/home/chantale/shopsasa/shopsasa/src/pictures/backup.webp'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="text-container">
        <h1 className="text-uppercase">Welcome to Shopsasa</h1>
        
        <h5>We deal with general supplies of stationery, office equipment, office furniture, and other supplies.</h5>
      </div>
      <div className="image-container">
        <img src={homepageImage} alt="Hero " className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;




