import React, { Component } from 'react';

import './ForumOption.css';

function ForumOption(props) {
    return (
        <div>
            <a href="#" className="forumListFixed__option__a">
                <div className="forumListFixed__option__div1">
                    <span className="forumListFixed__option__icon">
                        <img src={props.image} width="30" />
                    </span>
                    <div className="forumListFixed__option__text">
                        {props.text}
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ForumOption;