import React from "react";
import "./Offer.css";
const Offer = () => {
  return (
    <div className="offer-container">
      <h1>What we offer</h1>
      <div className="icons-container">
        <div className="offer-icon">
          <i class="fab fa-typo3 icon-img"></i>
          <p>Counseling</p>
        </div>
        <div className="offer-icon">
          <i class="fab fa-typo3 icon-img"></i>
          <p>Documentation</p>
        </div>
        <div className="offer-icon">
          <i class="fab fa-typo3 icon-img"></i>
          <p>Visa Processing</p>
        </div>
        <div className="offer-icon">
          <i class="fab fa-typo3 icon-img"></i>
          <p> Language Class</p>
        </div>
        <div className="offer-icon">
          <i class="fab fa-typo3 icon-img"></i>
          <p> Travel Arrangement</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
