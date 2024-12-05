import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Header from "./components/landing_page/Header";
import Hero from "./components/landing_page/Hero";
import Features from "./components/landing_page/Features";
import Pricing from "./components/landing_page/Pricing";
import Footer from "./components/landing_page/Footer";
import "./App.css"; // Global styles

function App() {
  return (
    <Router>
      <div className="app-container">
      <Header /> {/* Always visible */}
        
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
        <Footer /> {/* Always visible */}
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Features />
      <Pricing />
      <p>Welcome to the Storytelling App! Explore our features and sign up to get started.</p>
    </div>
  );
}

export default App;
