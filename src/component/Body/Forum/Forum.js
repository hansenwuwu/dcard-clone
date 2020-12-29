import React from 'react';

import './Forum.css';

import ForumBody from './ForumBody';
import ForumNavigator from './ForumNavigator';
import Commercial from './Commercial';

function Forum(props) {

    return (
        <div className="forum__container">
            <ForumNavigator />
            <ForumBody />
            <Commercial />
        </div>
    );

}

export default Forum;