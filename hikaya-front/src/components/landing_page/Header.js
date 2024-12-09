import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth(); // Access user and logout method from context
  const navigate = useNavigate();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout(); // Call logout from context
    navigate("/login"); // Redirect to login page after logging out
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
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

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">
            <span>Home</span>
          </Link>
          <Link to="/dashboard" className="nav-link">
            <span>Stories</span>
          </Link>
          <Link to="/write_story" className="nav-link">
            <span>Write Story</span>
          </Link>
          <Link to="/aboutus" className="nav-link">
            <span>About-us</span>
          </Link>
          <Link to="/contactus" className="nav-link">
            <span>Contact</span>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Show search bar and profile dropdown if user is logged in, else show login button */}
        <div className="nav-actions">
          {user ? (
            <>
             
              <div className="profile-dropdown">
                <img
                  src={"/logo.png"}
                  alt="Profile"
                  className="profile-image"
                />
                <div className="dropdown-content">
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Log Out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="action-btn">
                <div className="btn-text">Sign In</div>
              </button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
