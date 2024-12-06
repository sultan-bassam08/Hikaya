import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import Landing from "./pages/landingpage";
import "./App.css"; // Global styles
import WriteStory from "./components/story_components/writeStory";
import ReadStory from "./components/readStory/readStory";
//omar
import Header from "./components/landing_page/Header";
import Contact from "./pages/Contact_us";
import About from "./pages/About_Us";
import MainPage from "./pages/MainPage";
import Footer from "./components/landing_page/Footer";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<MainPage />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
        </Routes>
        <Footer />
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
