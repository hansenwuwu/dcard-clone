import React from "react";
import "./TopHeader.css";
import SearchIcon from "@material-ui/icons/Search";

function TopHeader() {
  return (
    <div className="topHeader">
      <div className="topHeader__containter">
        <div className="topHeader__left">
          <img className="topHeader__img" src="/dcard(2).png" />

          <div className="topHeader__search">
            <input type="text" placeholder="搜尋 新生住宿好物" />
            <div className="topHeader__searchIconContainer">
              <SearchIcon className="topHeader__searchIcon" />
            </div>
          </div>
        </div>

        <div className="topHeader__sign">
          <h3>註冊 / 登入</h3>
        </div>
        <div className="topHeader__drop"></div>
      </div>
    </div>
  );
}

export default TopHeader;
