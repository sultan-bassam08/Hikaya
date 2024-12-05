// src/App.js

import React from "react";
import Header from "./components/landing_page/Header";
import Hero from "./components/landing_page/Hero";
import Features from "./components/landing_page/Features";
import Pricing from "./components/landing_page/Pricing";
import Footer from "./components/landing_page/Footer";
import "./App.css"; // Global styles
import WriteStory from "./components/story_components/writeStory"
import ReadStory from "./components/readStory/readStory"

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <Hero />
    //   <Features />
    //   <Pricing />
    //   <Footer />
    // </div>
//  <WriteStory/>
<ReadStory></ReadStory>
  );
}

export default App;
