import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";

const Header = () => {
  // State to manage the mobile menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <div className="logo">
            <span className="logo-text">Hikaya</span>
            <div className="logo-shine"></div>
          </div>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link active" onClick={closeMenu}>
            <span>Home</span>
            <div className="link-effect"></div>
          </Link>
          <Link to="/products" className="nav-link" onClick={closeMenu}>
            <span>Products</span>
            <div className="link-effect"></div>
          </Link>
          <Link to="/services" className="nav-link" onClick={closeMenu}>
            <span>Services</span>
            <div className="link-effect"></div>
          </Link>
          <Link to="/aboutus" className="nav-link" onClick={closeMenu}>
            <span>About</span>
            <div className="link-effect"></div>
          </Link>
          <Link to="/contactus" className="nav-link" onClick={closeMenu}>
            <span>Contact</span>
            <div className="link-effect"></div>
          </Link>
        </div>

        <div className="nav-actions">
          <Link to="/login">
            <button className="action-btn">
              <div className="btn-text">Sign In</div>
              <div className="btn-effect"></div>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="menu-header">
          <div className="logo">
            <span className="logo-text">Premium</span>
          </div>
          <button className="close-menu" onClick={toggleMenu}>
            <span className="close-icon"></span>
          </button>
        </div>
        <div className="menu-links">
          <Link to="/" className="menu-link active" onClick={closeMenu}>
            <span>Home</span>
          </Link>
          <Link to="/products" className="menu-link" onClick={closeMenu}>
            <span>Products</span>
          </Link>
          <Link to="/services" className="menu-link" onClick={closeMenu}>
            <span>Services</span>
          </Link>
          <Link to="/aboutus" className="menu-link" onClick={closeMenu}>
            <span>About</span>
          </Link>
          <Link to="/contactus" className="menu-link" onClick={closeMenu}>
            <span>Contact</span>
          </Link>
        </div>
        <div className="menu-footer">
          <Link to="/login">
            <button className="mobile-action-btn">
              <span>Sign In</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
