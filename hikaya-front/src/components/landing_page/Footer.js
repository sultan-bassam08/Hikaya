import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="footer bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Contact Info Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-house-door"></i> 1234 Main Street, City
              </li>
              <li>
                <i className="bi bi-telephone"></i> +1 234 567 890
              </li>
              <li>
                <i className="bi bi-envelope"></i> info@mywebsite.com
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-4">
            <h5>Subscribe to Our Newsletter</h5>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </form>
            {submitted && (
              <p className="mt-2 text-success">Thank you for subscribing!</p>
            )}
          </div>

          {/* Location Map Section */}
          <div className="col-md-4">
            <h5>Our Location</h5>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.489627316453!2d144.95373621531885!3d-37.81720977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4538a7b2b7%3A0x71a94a35f3cdb8fb!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1616627340231!5m2!1sen!2sau"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center mt-4">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
