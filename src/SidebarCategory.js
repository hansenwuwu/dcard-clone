import React from "react";
import "./SidebarCategory.css";

function SidebarCategory({ text }) {
  return (
    <div className="sidebarCategory">
      <div className="sidebarCategory__container">
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default SidebarCategory;
