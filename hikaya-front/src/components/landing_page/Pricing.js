// src/components/landing_page/Pricing.js

import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h2>Choose Your Plan</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Premium Plan</h3>
          <p>$9.99/month</p>
          <button className="btn-primary">Subscribe</button>
        </div>
        <div className="pricing-card">
          <h3>Standard Plan</h3>
          <p>$4.99/month</p>
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
