import React from "react";
import "./Testimonials.css";
import FAQ from "./FAQ";
import RightLine from "../lines/rightLine";
const Testimonials = () => {
  return (
    <>
      <section id="Testimonial" className="testimonials py-5 ">
        <RightLine />
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "white" }}>
            What Our Customers Say
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial p-3 shadow-sm">
                <p>
                  "This platform is a game-changer! Highly recommend it to
                  everyone."
                </p>
                <h6>- Sarah J., CEO</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 shadow-sm">
                <p>
                  "Exceptional quality and support. Exceeded all expectations!"
                </p>
                <h6>- Mike R., Designer</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 shadow-sm">
                <p>
                  "Amazing experience from start to finish. Worth every penny."
                </p>
                <h6>- Emily K., Developer</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
};

export default Testimonials;
