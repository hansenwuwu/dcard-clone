import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import './Root.css';

import Header from './Header/Header';
import Body from './Body/Body';

function Root(props) {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/forum" />
                    </Route>
                    <Route exact path="/:title">
                        <Header />
                        <Body />
                    </Route>
                    <Route exact path="/:title/:forum">
                        <Header />
                        <Body />
                    </Route>
                </Switch>
            </div>

        </Router>
    );

}

export default Root;