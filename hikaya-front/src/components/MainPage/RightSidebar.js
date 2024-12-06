import React from "react";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <div className="right-side dark">
      <div className="card">
        <div className="card-header">News</div>
        <div className="card-body">Here is some news content</div>
      </div>
      <div className="card">
        <div className="card-header">Events</div>
        <div className="card-body">Upcoming events</div>
      </div>
    </div>
  );
}

export default RightSidebar;
