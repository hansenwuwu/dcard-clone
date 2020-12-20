import React, { Component } from 'react';

import './Root.css';

import Header from './Header';
import Body from './Body/Body';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentForum: 'none',
            isLogin: false
        };

        // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        // this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }

}

export default Root;