// Hero.js
import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-container">
            <h1 className="text-uppercase animate-text">Welcome to Shopsasa</h1>
            <h5 className="animate-subtext">We are a team of talented designers making websites with Bootstrap</h5>
          </div>
          <div className="col-12 col-md-6 image-container">
            <img src="path-to-your-side-image.jpg" alt="Hero Image" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
