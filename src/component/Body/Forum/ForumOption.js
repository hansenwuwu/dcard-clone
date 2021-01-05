import React from 'react';
import {
    useParams,
    Link
} from "react-router-dom";

import './ForumOption.css';

function ForumOption(props) {

    let { forum } = useParams();

    return (
        <div>
            <Link className="forumListFixed__option__link" to={props.url}>
                <div className={(props.text === forum ? "forumListFixed__option__div1__nohover option_backgroun_selected" : "forumListFixed__option__div1")}>
                    < span className="forumListFixed__option__icon">
                        <img src={props.image} width="30" />
                    </span>
                    <div className="forumListFixed__option__text">
                        {props.text}
                    </div>
                </div>
            </Link>
            {/* <a href={props.url} className="forumListFixed__option__a">
                <div className={"forumListFixed__option__div1" + (props.text == forum ? " option_backgroun_selected" : "")}>
                    <span className="forumListFixed__option__icon">
                        <img src={props.image} width="30" />
                    </span>
                    <div className="forumListFixed__option__text">
                        {props.text}
                    </div>
                </div>
            </a> */}
        </div >
    );
}

export default ForumOption;