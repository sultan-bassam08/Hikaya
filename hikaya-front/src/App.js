// src/App.js

import React from "react";
import Header from "./components/landing_page/Header";
import Hero from "./components/landing_page/Hero";
import Features from "./components/landing_page/Features";

import Footer from "./components/landing_page/Footer";
import Landing from "./components/landing_page/landingpage";
import "./App.css"; // Global styles
import WriteStory from "./components/story_components/writeStory";
import ReadStory from "./components/readStory/readStory";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Always visible */}
        <nav className="nav-bar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer /> {/* Always visible */}
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <Landing />
    </div>
    // <div className="App">
    //   <Header />
    //   <Hero />
    //   <Features />
    //   <Pricing />
    //   <Footer />
    // </div>
    //  <WriteStory/>
    //<ReadStory></ReadStory>
  );
}

export default App;
