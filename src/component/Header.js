import React, { Component } from 'react';
import './Header.css'

// Material UI
import SearchIcon from "@material-ui/icons/Search";

class Header extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     currentForum: 'none',
        //     isLogin: false
        // };

        // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        // this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    render() {
        return (
            <div>
                <div className="header__root">
                    <div className="header__container">

                        <div className="header__left">
                            <a className="header_dcardIcon" href="#">
                                <img className="header__img" src="/dcard(2).png" />
                            </a>

                            <div className="header__search">
                                <div className="header__search__1">
                                    <form action className="header__search__form">
                                        <label className="header__search__label">
                                            <div className="header__search__label_1">
                                                <input type="search" className="header__search__input"
                                                    placeholder="搜尋 新生住宿好物">
                                                </input>
                                            </div>
                                            <div className="topHeader__searchIconContainer">
                                                <SearchIcon className="topHeader__searchIcon" />
                                            </div>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="topHeader__sign">
                            <h3>註冊 / 登入</h3>
                        </div>
                        {/* <div className="topHeader__drop"></div> */}

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;