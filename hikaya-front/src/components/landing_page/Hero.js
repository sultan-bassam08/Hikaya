import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Hikaya3d from "./hikaya3d";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Check if the user is logged in by checking for the token in localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // If the user is logged in, navigate to the write_story page
      navigate("/write_story");
    } else {
      // If the user is not logged in, navigate to the login page
      navigate("/login");
    }
  };

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
          <button className="callActionBtn" onClick={handleButtonClick}>
            Get Inspired
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
