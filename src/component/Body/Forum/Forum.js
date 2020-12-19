import React, { Component } from 'react';

import './Forum.css';

import ForumBody from './ForumBody';
import ForumNavigator from './ForumNavigator';

class Forum extends Component {
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
                <div className="forum__container">
                    <ForumNavigator className="forum__forumNavigator" />
                    <ForumBody className="forum__forumBody" />
                </div>
            </div>
        );
    }

}

export default Forum;