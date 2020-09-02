import React from "react";
import "./App.css";

import TopHeader from "./TopHeader";
import MainBody from "./MainBody";

function App() {
  return (
    <div className="App">
      {/* flex box column around */}
      <div className="app__container">
        <TopHeader />
        {/* Body 1280px */}
        <MainBody />
      </div>
    </div>
  );
}

export default App;
