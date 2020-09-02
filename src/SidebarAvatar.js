import React from "react";
import "./SidebarAvatar.css";
import Avatar from "@material-ui/core/Avatar";

function SidebarAvatar({ text, image }) {
  return (
    <div className="sidebarAvatar">
      <div className="sidebarAvatar__container">
        <Avatar className="sidebarAvatar__Avatar" src={image}></Avatar>
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default SidebarAvatar;
