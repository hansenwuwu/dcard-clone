import React from "react";
import "./MainBody.css";

import Sidebar from "./Sidebar";
import Feed from "./Feed";

function MainBody() {
  return (
    <div className="mainBody">
      <div className="body__container">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default MainBody;
