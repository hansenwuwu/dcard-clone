import React, { Component } from 'react';

import './Body.css';

import Forum from './Forum/Forum';

class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body">
                <Forum />
            </div>
        );
    }

}

export default Body;