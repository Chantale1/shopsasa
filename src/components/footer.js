// src/components/footer.js
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="map">
          {/* OpenStreetMap Embed for Ecobank Towers, Nairobi CBD */}
          <iframe
            title="OpenStreetMap"
            src="https://www.openstreetmap.org/export/embed.html?bbox=36.820710183143615%2C-1.2962050913964162%2C36.82546806335449%2C-1.2924653805087273&layer=mapnik"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>Ecobank Towers, Nairobi CBD</p>
          <p>Email: <a href="mailto:contact@shopsasa.com">contact@shopsasa.com</a></p>
          <p>Phone: +254 700 000 000</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


