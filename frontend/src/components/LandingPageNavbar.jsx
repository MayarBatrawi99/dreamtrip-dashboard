import React from 'react';
import './LandingPageNavbar.css';
import logoImage from '../assets/animations/butterfly.png';

function LandingPageNavbar() {
  return (
    <header className="navbar-container">
      <div className="logo-section">
        <img src={logoImage} alt="DreamTrip Logo" className="logo-icon" />
        <span className="logo-text">DreamTrip</span>
      </div>
      <div className="auth-buttons">
      
        <button className="sign-in-btn">
          
          <span>Get</span>
          <span>Started</span> {/* Corrected text here */}
        </button>
        <button className="sign-in-btn">
          <i className="fas fa-user"></i> {/* Font Awesome user icon */}
          <span>Sign</span>
          <span>in</span> {/* Corrected text here */}
        </button>
        <button className="sign-in-btn">
          
          <span>Explore</span>
        </button>
      </div>
      
    </header>
  );
}

export default LandingPageNavbar;