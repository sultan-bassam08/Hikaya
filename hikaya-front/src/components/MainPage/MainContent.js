import React from "react";
import "./MainContent.css";

const MainContent = ({ content, title, desc }) => {
  return (
    <div className="main-content">
      <h2>{title}</h2>
      <p>{desc}</p>
      {content}
    </div>
  );
};

export default MainContent;
