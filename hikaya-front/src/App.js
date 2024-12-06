import React from "react"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout"; // esraa 
import Register from "./components/Auth/Register";
// import Header from "./components/landing_page/Header";
import Hero from "./components/landing_page/Hero";
import Features from "./components/landing_page/Features";

import Footer from "./components/landing_page/Footer";
import Landing from "./components/landing_page/landingpage";
// import "./App.css"; // Global styles
import WriteStory from "./components/story_components/writeStory";
import ReadStory from "./components/readStory/readStory";
import AboutUs from "./components/About_Us/About_Us";
import Contact from "./components/Contact_Us/Contact_us";
import "./axiosSetup";


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
          <Route path="/logout" element={<Logout />} /> {/* esraa 8/}
          <Route path="/contact" element={<Contact />} /> {/* Contact Us route */}
          <Route path="/about" element={<AboutUs />} /> {/* About Us route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  //   <Router>
  //     <div className="app-container">
  //       <Header /> {/* Always visible */}
  //       <nav className="nav-bar">
  //         <Link to="/" className="nav-link">
  //           Home
  //         </Link>
  //         <Link to="/login" className="nav-link">
  //           Login
  //         </Link>
  //         <Link to="/register" className="nav-link">
  //           Register
  //         </Link>
  //       </nav>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Register />} />
  //       </Routes>
  //       <Footer />
  //     </div>
  //   </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      {/* <Landing /> */}
      
    </div>
    // <div className="App">
    //   <Header />
    //   <Hero />
    //   <Features />
    //   <Pricing />
    //   <Footer />
    // </div>
    // 
    //<ReadStory></ReadStory>
  );
}

export default App;
