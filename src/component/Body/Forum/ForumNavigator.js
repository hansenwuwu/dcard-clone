import React from 'react';

import './ForumNavigator.css';

import ForumListFixed from './ForumListFixed';
import ForumList from './ForumList';

// const FORUMS = [
//     { name: 'Sporting Goods', icon: '$49.99' },
//     { name: 'Sporting Goods', icon: '$9.99' },
//     { name: 'Sporting Goods', icon: '$29.99' },
//     { name: 'Electronics', icon: '$99.99' },
//     { name: 'Electronics', icon: '$399.99' },
//     { name: 'Electronics', icon: '$199.99' }
// ];

function ForumNavigator(props) {

    return (
        <div className="forumNavigator__container">
            <div className="forumNavigator__fixed">
                <ForumListFixed />
                <ForumList />
            </div>
        </div>
    );

}

export default ForumNavigator;