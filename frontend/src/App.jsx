import React from "react";
import Navbar from "./components/Navbar"; // Correct path
import LandingPage from "./pages/LandingPage"; // Correct path
import "./App.css"; // App-wide styles if any, or general styling can be in index.css

function App() {
  return (
    <div className="App">
      {/* Navbar is now handled by LandingPage itself, or can be placed here if it's truly global outside LandingPage */}
      {/* For this design, let's keep it within LandingPage as it's tightly coupled to its max-width and background */}
      <LandingPage />
    </div>
  );
}

export default App;