import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="map">
          {/* Embed Google Maps iframe for Ecobank Towers */}
          <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8137925466035!2d36.81990357590204!3d-1.285734098702037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7a8fe3841%3A0xdf3e2e9336f667cb!2sTown%20House%2C%20Mama%20Ngina%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1739264121278!5m2!1sen!2ske" 
  width="600" 
  height="450" 
  style={{ border: "0", marginRight: "20px" }} 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"
/>

        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>TOWN HOUSE, Nairobi CBD</p>
          <p>WABERA STREET,5THFLOOR SUITE 502</p>
          <p>Email: <a href="mailto:contact@shopsasa.com">contact@shopsasa.com</a></p>
          <p>Phone: +254 700 000 000</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;






