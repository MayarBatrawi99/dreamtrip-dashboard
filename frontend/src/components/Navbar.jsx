import React from 'react';
import './Navbar.css';
import logoImage from '../assets/animations/butterfly.png';

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="logo-section">
        <img src={logoImage} alt="DreamTrip Logo" className="logo-icon" />
        <span className="logo-text">DreamTrip</span>
      </div>
      <nav className="nav-links">
        <a href="#trip-planner">Trip Planner</a>
        <a href="#my-trips">My Trips</a>
        <a href="#admin-tool">Admin Tool</a>
      </nav>
      <div className="auth-buttons">
        <button className="sign-in-btn">
          <i className="fas fa-user"></i> {/* Font Awesome user icon */}
          <span>Sign</span>
          <span>in</span> {/* Corrected text here */}
        </button>
      </div>
    </header>
  );
}

export default Navbar;