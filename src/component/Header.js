import React, { Component } from 'react';
import './Header.css'

// Material UI
import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from '@material-ui/icons/Create';
import NotificationsIcon from '@material-ui/icons/Notifications';

import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="header__root">
                    <div className="header__container">

                        <div className="header__left">
                            <a className="header_dcardIcon" href="#">
                                <span className="header__dcardIcon__span">
                                    <img className="header__img" src="/dcard(2).png" />
                                </span>
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

                        <div className="header__tool">
                            <div className="header__tool__container">
                                <div className="header__tool__icon">
                                    <a href="#" className="header__tool__a">
                                        <span className="header__tool__span">
                                            <CreateIcon className="header__tool__icon"/>  
                                        </span>
                                    </a>
                                </div>
                                <div className="header__tool__icon">
                                    <a href="#" className="header__tool__a">
                                        <span className="header__tool__span">
                                            <NotificationsIcon className="header__tool__icon"/>
                                        </span>
                                    </a>
                                </div>
                                <div className="header__tool__icon">
                                    <a href="#" className="header__tool__a">
                                        <span className="header__tool__span">
                                            <InsertDriveFileIcon className="header__tool__icon"/>  
                                        </span>
                                    </a>
                                </div>
                                <div className="header__tool__icon">
                                    <a href="#" className="header__tool__a">
                                        <span className="header__tool__span">
                                            <MailIcon className="header__tool__icon"/>  
                                        </span>
                                    </a> 
                                </div>
                                <div className="header__tool__icon">
                                    <a href="#" className="header__tool__a">
                                        <span className="header__tool__span">
                                            <PersonIcon className="header__tool__icon"/>  
                                        </span>
                                    </a>
                                </div>
                                <div className="header__tool__dropdown">
                                    <a href="#" className="header__tool__a">
                                        <span className="header__tool__span">
                                            <ArrowDropDownIcon className="header__tool__icon"/> 
                                        </span>      
                                    </a>
                                </div>
                            </div>
                            
                            {/* <div className="topHeader__sign">
                                <h3>註冊 / 登入</h3>
                            </div> */}
                        </div>

                        

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;