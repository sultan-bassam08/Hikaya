// src/App.js

import React from "react";
import Header from "./components/landing_page/Header";
import Hero from "./components/landing_page/Hero";
import Features from "./components/landing_page/Features";
import Pricing from "./components/landing_page/Pricing";
import Footer from "./components/landing_page/Footer";
import UserProfile from "./components/UserProfile/UserProfile"; // Import UserProfile component
import EditProfile from "./components/UserProfile/EditProfile"; // Import UserProfile component
import ProfileContent from "./components/ProfileContent";

import "./App.css"; // Global styles

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
      <UserProfile />
      <ProfileContent/>
      <EditProfile/>
    </div>
  );
}

export default App;
