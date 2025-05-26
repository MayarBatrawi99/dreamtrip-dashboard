import React from 'react';
import './LandingPage.css';
import Navbar from '../components/LandingPageNavbar';
import butterflyImage from '../assets/animations/butterfly.png';

function LandingPage() {
  return (
    <div className="landing-page-container">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div>
          <img src={butterflyImage} alt="Butterfly" className="hero-butterfly" />
        </div>
        <div className="hero-content">
          <h1>Plan your <br /> dream trip <br /> with ease</h1>
          <div className="hero-button-wrapper">
            <button className="get-started-btn primary">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
