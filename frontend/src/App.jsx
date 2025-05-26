import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from "react";
import LandingPage from "./pages/LandingPage"; // Correct path
import "./App.css"; // App-wide styles if any, or general styling can be in index.css

function App() {
  const [isLoggedIn,setLoggedIn]= useState(false);
  return (
    <div className="App">
      
      <LandingPage />
    </div>
  );
}

export default App;