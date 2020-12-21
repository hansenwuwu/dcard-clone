import React, { Component } from 'react';

import './Forum.css';

import ForumBody from './ForumBody';
import ForumNavigator from './ForumNavigator';
import Commercial from './Commercial';

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
            <div className="forum__container">
                <ForumNavigator />
                <ForumBody />
                <Commercial/>
            </div>
        );
    }

}

export default Forum;