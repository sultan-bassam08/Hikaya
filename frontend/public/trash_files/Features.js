// src/components/landing_page/Features.js

import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="auto"
          viewBox="0 0 100% auto"
        >
          <defs>
            <style>
              {`
            .cls-1, .cls-2 {
              fill: none;
              stroke-linecap: round;
              stroke-linejoin: round;
              fill-rule: evenodd;
              stroke-dasharray: 5000; /* large enough to cover the length of the path */
              stroke-dashoffset: 5000; /* start hidden */
              animation: draw 8s ease-in-out infinite; /* animate with ease-in-out, infinite loop */
            }

            .cls-1 {
              stroke-width: 25px;
              stroke: url(#linear-gradient);
            }

            .cls-2 {
              stroke-width: 1.5px;
              stroke: url(#linear-gradient-2);
            }

            /* Keyframes for the stroke animation */
            @keyframes draw {
              0% {
                stroke-dashoffset: 5000;
              }
              50% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: 5000;
              }
            }
          `}
            </style>
            <linearGradient
              id="linear-gradient"
              x1="948.5"
              y1="689.469"
              x2="948.5"
              y2="-188"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#0bbafb" />
              <stop offset="1" stopColor="#4285ec" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="948.5"
              y1="689.469"
              x2="948.5"
              y2="-188"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ecdfdf" />
              <stop offset="1" stopColor="#ecdfdf" />
            </linearGradient>
          </defs>
          <path
            className="cls-1"
            d="M-57,112s270.925-52.047,476,24c90.243,33.464,10.668,265.627,35,333,79.625,220.477,134.676,121.092,284,200,147.99,78.2,234.9-153.975,197-314-32-135.117-6.125-261.35,124-218,151.98,50.631,895-3,895-3S1905.87-23.557,1771-24,1600.87,83.515,1419,73,929.375,18.8,905-67s16-121,16-121"
          />
          <path
            id="Shape_2_copy_3"
            data-name="Shape 2 copy 3"
            className="cls-2"
            d="M-57,112s270.925-52.047,476,24c90.243,33.464,10.668,265.627,35,333,79.625,220.477,134.676,121.092,284,200,147.99,78.2,234.9-153.975,197-314-32-135.117-6.125-261.35,124-218,151.98,50.631,895-3,895-3S1905.87-23.557,1771-24,1600.87,83.515,1419,73,929.375,18.8,905-67s16-121,16-121"
          />
        </svg>
      </div>
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
