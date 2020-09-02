import React from "react";
import "./SidebarOption.css";

function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <div className="sidebarOption__container">
        <Icon className="sidebarOption__icon" />
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default SidebarOption;
