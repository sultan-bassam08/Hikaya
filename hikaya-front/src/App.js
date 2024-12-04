// src/App.js

import React from "react";
import Header from "./components/landing_page/Header";
import Hero from "./components/landing_page/Hero";
import Features from "./components/landing_page/Features";
import Pricing from "./components/landing_page/Pricing";
import Footer from "./components/landing_page/Footer";
import "./App.css"; // Global styles

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
