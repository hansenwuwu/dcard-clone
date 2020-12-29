import React from 'react';

import './ForumList.css'

import ForumOption from './ForumOption';

function ForumList(props) {
    return (
        <div className="forumList__container">
            <div className="forumList__title">
                <h2>即時熱門看板</h2>
            </div>
            <div className="forumList__list">
                <ForumOption url="/forum/gossip" text="gossip" image="/icon/gossip_icon.svg" />
                <ForumOption url="/forum/NBA" text="NBA" image="/icon/nba_icon.png" />
                <ForumOption url="/forum/LOL" text="LOL" image="/icon/lol_icon.png" />
                <ForumOption url="/forum/Soft-job" text="Soft-job" image="/icon/computer_icon.png" />
                <ForumOption url="/forum/Tech-job" text="Tech-job" image="/icon/hardware_icon.jpg" />
                {/* <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption /> */}
            </div>
        </div>
    );
}

export default ForumList;