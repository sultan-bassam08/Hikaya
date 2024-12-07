import React from "react";
import Sidebar from "../components/MainPage/Sidebar";
import RightSidebar from "../components/MainPage/RightSidebar";
import "../components/MainPage/MainPage.css";
import StoriesList from "../components/story_components/storiesList";

function MainPage() {
  return (
    <div className="container">
      <div className="row">
       
        
          <nav className="bg-dark navbar-dark">
            <div className="container">
              <a href="#" className="navbar-brand">
                <i className="fas fa-tree mr-2"></i>Hikaya
              </a>
            </div>
          </nav>

          <section id="header" className="jumbotron text-center">
            <h1 className="display-3">Hikaya</h1>
            <p className="lead">Share your stories with the world</p>
            <a href="#" className="btn btn-primary">Start Sharing</a>
            <a href="#" className="btn btn-secondary">Explore Stories</a>
          </section>

    <StoriesList/>
          
        
      </div>
    </div>
  );
}

export default MainPage;
