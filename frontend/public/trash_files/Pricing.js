import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing py-5">
      <div className="container">
        <h2 className="text-center mb-4">Choose Your Plan</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center shadow">
              <div className="card-header bg-primary text-white">Basic</div>
              <div className="card-body">
                <h3 className="card-title">$9.99/mo</h3>
                <p className="card-text">
                  Perfect for individuals starting out.
                </p>
                <button className="btn btn-outline-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow">
              <div className="card-header bg-primary text-white">Pro</div>
              <div className="card-body">
                <h3 className="card-title">$29.99/mo</h3>
                <p className="card-text">
                  Great for professionals and small teams.
                </p>
                <button className="btn btn-outline-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow">
              <div className="card-header bg-primary text-white">
                Enterprise
              </div>
              <div className="card-body">
                <h3 className="card-title">$99.99/mo</h3>
                <p className="card-text">Ideal for large organizations.</p>
                <button className="btn btn-outline-primary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
