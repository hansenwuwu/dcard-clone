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
            </div>
        );
    }
}

export default Header;