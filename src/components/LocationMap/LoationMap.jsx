import React from "react";

const LocationMap = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <h2 className="map-heading">Visit Us</h2>
        <p className="map-description">
          We are located at Raj Global Study. Feel free to drop by to learn more
          about our courses and how we can help you with your Japanese language
          journey.
        </p>
        <div className="map-embed-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.008785048559!2d84.06903927547982!3d28.054756375985104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995bbbc355a34e7%3A0xe6eda3a98b9fb1c1!2sRaj%20Global%20Study!5e0!3m2!1sen!2snp!4v1725708751898!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
