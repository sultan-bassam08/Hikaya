import React, { useState } from "react";
import Sidebar from "../components/MainPage/Sidebar";
import RightSidebar from "../components/MainPage/RightSidebar";
import "../components/MainPage/MainPage.css";

import Search from "../components/landing_page/SearchComponent";
import WriteStory from "../components/story_components/writeStory"; // Add your login component import

function MainPage() {
  const [isExploreClicked, setIsExploreClicked] = useState(true); // Default to true to show Explore

  const handleExploreClick = () => {
    setIsExploreClicked(true);
  };

  const handleLoginClick = () => {
    setIsExploreClicked(false);
  };

  return (
    <div className="container">
      <div className="row">
        <section id="header" className="jumbotron text-center">
          <h1 className="display-3 logo-text">Hikaya</h1>
          <p className="lead">Discover inspiring stories from people around the world</p>
          <a href="#" className="submitButton" onClick={handleLoginClick}>
            Start Sharing
          </a>
          <a
            href="#"
            className="submitButton"
            onClick={handleExploreClick}
          >
            Explore Stories
          </a>
        </section>
        {isExploreClicked ? <Search /> : <WriteStory />}{" "}
        {/* Conditional rendering */}
      </div>
    </div>
  );
}

export default MainPage;
