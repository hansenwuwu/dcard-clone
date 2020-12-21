import React, { Component } from 'react';

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
                <ForumOption text="所有看板" icon={ListAltIcon} />
                <ForumOption text="即時熱門看板" Icon={WhatshotIcon} />
                <ForumOption text="好物研究室" Icon={StorefrontIcon} />
                <ForumOption text="遊戲專區" Icon={SportsEsportsIcon} />
            </div>
        );
    }
}

export default ForumListFixed;