import React from 'react';

import './Forum.css';

import ForumBody from './ForumBody';
import ForumNavigator from './ForumNavigator';
import Commercial from './Commercial';

import {
    useLocation,
} from "react-router-dom";

function Forum(props) {

    let location = useLocation();

    const { state = {} } = location;
    const { modal } = state;

    return (
        <div className="forum__container">
            {/* { modal && <h1>this is modal</h1>} */}

            <ForumNavigator />
            <ForumBody />
            <Commercial />

        </div>
    );

}

export default Forum;