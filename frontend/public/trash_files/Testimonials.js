import React from "react";
import "./Testimonials.css";
import FAQ from "../../src/components/landing_page/FAQ";
const Testimonials = () => {
  return (
    <>
      <section className="testimonials py-5 bg-light">
        <div className="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="auto"
            viewBox="0 0 1920 auto"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="873.047"
                y1="442.75"
                x2="873.047"
                y2="40.281"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#0bbafb" />
                <stop offset="1" stopColor="#4285ec" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="873.047"
                y1="442.75"
                x2="873.047"
                y2="40.281"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ecdfdf" />
                <stop offset="1" stopColor="#ecdfdf" />
              </linearGradient>
            </defs>
            <path
              id="line2-big"
              className="dcls-1"
              d="M1928,299S1578.41-45.547,1444,127c-55.26,70.934-86.33,168.627-62,236,79.63,220.477-416.4-66.767-380-252,19.16-97.5-29.1,404.025-67,244C749.177-429.569-636.383,510.985-29,422c-168.165,24.637-24-280-24-280"
            />
            <path
              id="line2-big_copy"
              data-name="line2-big copy"
              className="dcls-2"
              d="M1928,299S1578.41-45.547,1444,127c-55.26,70.934-86.33,168.627-62,236,79.63,220.477-416.4-66.767-380-252,19.16-97.5-29.1,404.025-67,244C749.177-429.569-636.383,510.985-29,422c-168.165,24.637-24-280-24-280"
            />
          </svg>
        </div>
        <div className="container">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
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
