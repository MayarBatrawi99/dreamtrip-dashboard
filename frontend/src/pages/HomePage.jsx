import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar'; // Correct path to Navbar component
import butterflyImage from '../assets/animations/butterfly.png'; // Correct path for the GIF

function HomePage() {
  return (
    <div className="home-page-container">
      {/* Navbar Section */}
      <Navbar /> {/* Use the Navbar component here */}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={butterflyImage} alt="Butterfly" className="hero-butterfly" />
          <h1>Plan your dream trip with ease</h1>
          <button className="get-started-btn primary">Get Started</button>
        </div>

        {/* User Dashboard Card */}
        <div className="user-dashboard-card">
          <div className="card-header">
            <h2>User Dashboard</h2>
            <button className="menu-icon">
              <i className="fas fa-ellipsis-h"></i> {/* Font Awesome ellipsis icon */}
            </button>
          </div>
          <div className="card-tabs">
            <button className="tab active">Planner</button>
            <button className="tab">Upcoming</button>
            <button className="tab">Account</button>
          </div>
          <div className="upcoming-trips">
            <h3>Upcoming Trips</h3>
            <div className="trip-item">
              <p className="trip-destination">Paris, France</p>
              <p className="trip-dates">Apr 18 – Apr 23</p>
            </div>
          </div>
          <button className="get-started-btn secondary">Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;