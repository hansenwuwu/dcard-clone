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

            <div>
                <Header />

                <Switch>
                    <Route exact path="/">
                        <Body />
                    </Route>
                    <Route path="/:title">
                        <Body />
                    </Route>
                </Switch>
            </div>

        </Router>
    );

}

export default Root;