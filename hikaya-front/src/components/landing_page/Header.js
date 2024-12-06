import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Header = () => {
  return (
<<<<<<< HEAD
    <header className="header">
      <nav>
        <div className="logo">
          <img src="path-to-your-logo.png" alt="Logo" className="logo-img" />
=======
    <header className="bg-white shadow fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand" href="#">
          <img src="logo.png" alt="Logo" style={{ height: "60px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#start">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Testimonial">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#FAQ">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary nav-link text-white" href="login">
                Login
              </a>
            </li>
          </ul>
>>>>>>> 43bc21717970a315d3e8e362dd13e7cd04f6c6c3
        </div>
      </nav>
    </header>
  );
};

export default Header;
