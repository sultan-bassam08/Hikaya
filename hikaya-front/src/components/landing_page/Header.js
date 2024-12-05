import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="path-to-your-logo.png" alt="Logo" className="logo-img" />
        </div>
        <ul className="nav-list">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
