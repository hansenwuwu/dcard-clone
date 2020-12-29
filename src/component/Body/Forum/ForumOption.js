import React, { Component } from 'react';
import {
    useParams,
    useRouteMatch
} from "react-router-dom";

import './ForumOption.css';

function ForumOption(props) {

    let { title, forum } = useParams();

    return (
        <div>
            <a href={props.url} className="forumListFixed__option__a">
                <div className={"forumListFixed__option__div1" + (props.text == forum ? " option_backgroun_selected" : "")}>
                    <span className="forumListFixed__option__icon">
                        <img src={props.image} width="30" />
                    </span>
                    <div className="forumListFixed__option__text">
                        {props.text}
                    </div>
                </div>
            </a>
        </div >
    );
}

export default ForumOption;