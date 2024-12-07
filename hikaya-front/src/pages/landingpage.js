import React from "react";

import Hero from "../components/landing_page/Hero";
import Features from "../components/landing_page/Features";
import ImageSequance from "../components/landing_page/imageSequance";

import Testimonials from "../components/landing_page/Testimonials";

const Landing = () => {
  return (
    <>
      <Hero />
      <Features />
      <ImageSequance />
      <Testimonials />
    </>
  );
};

export default Landing;
