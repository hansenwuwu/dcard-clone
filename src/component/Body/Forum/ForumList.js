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
                    <ForumOption text="list1" />
                    <ForumOption text="黎蓁個版" />
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
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                    <ForumOption />
                </div>
            </div>
        );
    }
}

export default ForumList;