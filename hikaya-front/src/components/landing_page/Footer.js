import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // التحقق من صحة البريد الإلكتروني
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // إعداد البيانات للإرسال
    const formData = {
      access_key: "7eb2f20d-f246-43da-abe2-b79a358edae4",
      email,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Subscribed!",
          text: "Thank you for subscribing to our newsletter.",
          icon: "success",
        });
        setSubmitted(true);
        setEmail("");
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Network error. Please try again later.",
        icon: "error",
      });
    }

    setError("");
  };

  return (
    <footer className="dark-footer skin-dark-footer style-2">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Subscription Section */}
            <div className="col-lg-5 col-md-5">
              <div className="footer_widget">
                <span className="logo-text">Hikaya</span>
                <h4 className="extream mb-3">Need help with something?</h4>
                <p>
                  Receive updates, hot deals, tutorials, and discounts straight
                  to your inbox every month.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="mt-4"
                  aria-label="Newsletter subscription form"
                >
                  <div className="input-group flex-wrap align-items-center">
                    <input
                      type="email"
                      className="form-control mr-2"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Email Address"
                    />
                    <button
                      type="submit"
                      className="btn btn-danger text-light"
                      aria-label="Subscribe Button"
                    >
                      {submitted ? "Subscribed" : "Subscribe"}
                    </button>
                  </div>
                  {error && <small className="text-danger mt-2">{error}</small>}
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-3">
              <div className="footer_widget">
                <h4 className="widget_title">Quick Links</h4>
                <ul className="footer-menu">
                  {[
                    "Home Page",
                    "About Page",
                    "Contact Page",
                    "Blog",
                    "Pricing",
                    "Services",
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="footer-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Location Map */}
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

      {/* Footer Bottom */}
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
