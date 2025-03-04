import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Office Section with Map */}
        <div className="footer-section">
          <h3>OUR OFFICE</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8137925466035!2d36.81990357590204!3d-1.285734098702037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7a8fe3841%3A0xdf3e2e9336f667cb!2sTown%20House%2C%20Mama%20Ngina%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1739264121278!5m2!1sen!2ske"
            width="250"
            height="150"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>TOWN HOUSE, Nairobi CBD</p>
          <p>WABERA STREET, 5TH FLOOR SUITE 502</p>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>Email: <strong>contact@shopsasa.com</strong></p>
          <p>Phone: <strong>+254 710 539 881</strong></p>
          <p>Working Days: Monday - Saturday</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3>OPENING HOURS</h3>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday & Public Holidays: Closed</p>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shopsasa. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;







