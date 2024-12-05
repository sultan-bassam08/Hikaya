// src/components/landing_page/Features.js

import React from "react";
import "./Features.css";

import LiftLine from "../lines/liftLine";
const Features = () => {
  return (
    <section id="features" className="features">
      <LiftLine />
      <h2>Why Choose Hikaya?</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Easy to Use</h3>
          <p>
            Our platform is designed with simplicity in mind, making it easy for
            everyone to use.
          </p>
        </div>
        <div className="feature-card">
          <h3>Great Support</h3>
          <p>
            We provide 24/7 customer support to help you whenever you need it.
          </p>
        </div>
        <div className="feature-card">
          <h3>Affordable Plans</h3>
          <p>Choose from our flexible pricing plans to suit your needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
