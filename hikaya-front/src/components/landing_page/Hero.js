import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Hikaya3d from "./hikaya3d";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <Hikaya3d />

      <section
        style={{
          position: "absolute",
          top: "30vh",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 5,
          height: "20vh",
        }}
        id="hero"
        className="hero"
      >
        <div className="hero-content">
          <p id="qoute">Your story, your voice, your impact.</p>
          <Link to="/login">
            <button className="btn-primary">Get Started</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
