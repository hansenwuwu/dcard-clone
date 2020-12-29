import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

import './Body.css';

import Forum from './Forum/Forum';

function Body(props) {

    return (
        <div className="body">
            <div className="body__container">

                <Forum />

            </div>
        </div>
    );

}

export default Body;