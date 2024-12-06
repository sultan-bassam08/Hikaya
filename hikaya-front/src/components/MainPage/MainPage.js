import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-6">
          <div className="main-content">
            <h2>Welcome to Hikaya</h2>
            <p>Here are your posts and activities!</p>
          </div>
        </div>
        <div className="col-md-3">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
