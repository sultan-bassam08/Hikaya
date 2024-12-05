// src/App.js

import React from "react";

import Landing from "./components/landing_page/landingpage";
import Footer from "./components/landing_page/Footer";
import "./App.css"; // Global styles

function App() {
  return (
    <div className="App">
      <Landing />

      <Footer />
    </div>
  );
}

export default App;
