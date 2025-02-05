import React from 'react';

function MapComponent() {
  return (
    <div className="map-container">
      <h3>Our Location</h3>
      <iframe
        title="Ecobank Towers Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.203471893485!2d36.821080449074046!3d-1.2856732801242352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d718d1d3b1%3A0xe27807f3912640b1!2sEcobank%20Towers%20Branch!5e0!3m2!1sen!2ske!4v1738230373808!5m2!1sen!2ske"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapComponent;
