import React, { Component } from 'react';

import './ForumList.css'

import ForumOption from './ForumOption';

class ForumList extends Component {
    render() {
        return (
            <div className="forumList__container">
                <div className="forumList__title">
                    <h2>即時熱門看板</h2>
                </div>
                <div className="forumList__list">
                    <ForumOption text="Gossip" image="/icon/gossip_icon.svg" />
                    <ForumOption text="NBA" image="/icon/nba_icon.png" />
                    <ForumOption text="LOL" image="/icon/lol_icon.png" />
                    <ForumOption text="Soft_job" image="/icon/computer_icon.png" />
                    <ForumOption text="Tech_job" image="/icon/hardware_icon.jpg" />
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
}

export default ForumList;