import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import './Body.css';

import Forum from './Forum/Forum';

function Body(props) {

    return (
        <div className="body">
            <div className="body__container">

                <Switch>
                    <Route exact path="/forum">
                        <Forum />
                    </Route>
                </Switch>

            </div>
        </div>
    );

}

export default Body;