// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Raj Global Studies</h2>
          <p>Empowering knowledge for a global future.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Address: 123 Knowledge Ave, Suite 456, Study City, ST 78901</li>
            <li>
              Email:{' '}
              <a href="mailto:info@rajglobalstudies.com">
                info@rajglobalstudies.com
              </a>
            </li>
            <li>Phone: +1 (234) 567-8900</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Raj Global Studies. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
