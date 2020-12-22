import React, { Component } from 'react';

import './ForumListFixed.css';

import ForumOption from './ForumOption';

// Material UI
import ListAltIcon from "@material-ui/icons/ListAlt";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

class ForumListFixed extends Component {
    render() {
        return (
            <div className="forumListFixed__container">

                <a href="#" className="forumListFixed__option__a">
                    <div className="forumListFixed__option__div1">
                        <span className="forumListFixed__option__icon">
                            <ListAltIcon />
                        </span>
                        <div className="forumListFixed__option__text">
                            所有看板
                        </div>
                    </div>
                </a>

                <a href="#" className="forumListFixed__option__a">
                    <div className="forumListFixed__option__div1">
                        <span className="forumListFixed__option__icon">
                            <WhatshotIcon />
                        </span>
                        <div className="forumListFixed__option__text">
                            即時熱門看板
                        </div>
                    </div>
                </a>

                <a href="#" className="forumListFixed__option__a">
                    <div className="forumListFixed__option__div1">
                        <span className="forumListFixed__option__icon">
                            <StorefrontIcon />
                        </span>
                        <div className="forumListFixed__option__text">
                            好物研究室
                        </div>
                    </div>
                </a>

                <a href="#" className="forumListFixed__option__a">
                    <div className="forumListFixed__option__div1">
                        <span className="forumListFixed__option__icon">
                            <SportsEsportsIcon />
                        </span>
                        <div className="forumListFixed__option__text">
                            遊戲專區
                        </div>
                    </div>
                </a>

            </div>
        );
    }
}

export default ForumListFixed;