import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './Root.css';

import Header from './Header/Header';
import Body from './Body/Body';

function Root(props) {

    return (
        <Router>
            <Switch>
                <Route exact path="/">

                    <div>
                        <Header />
                        <Body />
                    </div>

                </Route>
            </Switch>
        </Router>
    );

}

export default Root;