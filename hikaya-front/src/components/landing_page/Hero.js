import React from "react";
import Hikaya3d from "./hikaya3d";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <Hikaya3d />

      <section
        style={{
          position: "absolute",
          top: "92.5vh",
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
          <button className="btn-primary">Get Started</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
