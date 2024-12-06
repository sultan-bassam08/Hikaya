import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const currentYear = new Date().getFullYear();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail(""); // Clear the input field after submission
    }
  };

  return (
    <footer className="dark-footer skin-dark-footer style-2">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="footer_widget">
                <span className="logo-text">Hikaya</span>
                <h4 className="extream mb-3">Need help with something?</h4>
                <p>
                  Receive updates, hot deals, tutorials, and discounts straight
                  to your inbox every month.
                </p>
                <div className="foot-news-last mt-4">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="input-group-append">
                        <button
                          type="submit"
                          className="btn btn-danger b-0 text-light"
                        >
                          {submitted ? "Subscribed" : "Subscribe"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="footer_widget">
                <h4 className="widget_title">Quick Links</h4>
                <ul className="footer-menu row">
                  <li className="col-12 col-sm-4 col-md-4 mb-3">
                    <a href="#">Home Page</a>
                  </li>
                  <li className="col-12 col-sm-4 col-md-4 mb-3">
                    <a href="#">About Page</a>
                  </li>
                  <li className="col-12 col-sm-4 col-md-4 mb-3">
                    <a href="#">Contact Page</a>
                  </li>
                  <li className="col-12 col-sm-4 col-md-4 mb-3">
                    <a href="#">Blog</a>
                  </li>
                  <li className="col-12 col-sm-4 col-md-4 mb-3">
                    <a href="#">Pricing</a>
                  </li>
                  <li className="col-12 col-sm-4 col-md-4 mb-3">
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="footer_widget">
                <h4 className="widget_title">Our Location</h4>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093057!2d144.953736315858!3d-37.81720997975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773f6f2d89a7b2!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1695288316863!5m2!1sen!2sau"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {currentYear} All rights reserved by the Hikaya team{" "}
            <span className="logo-text">Hikaya</span>.{" "}
            <span className="extra-text">
              Powered by Innovation and Creativity.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
