import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar dark">
      <ul className="sidebar-list">
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">Notifications</a>
        </li>
      </ul>

      <div className="card">
        <div className="card-header">News</div>
        <div className="card-body">Here is some news content</div>
      </div>
    </div>
  );
}

export default Sidebar;
