import React from 'react';
import {
    useParams
} from "react-router-dom";

import './Body.css';

import Forum from './Forum/Forum';

function Body(props) {

    let { title, forum } = useParams();
    console.log('body ', forum);

    return (
        <div className="body">
            <div className="body__container">

                <Forum />

            </div>
        </div>
    );

}

export default Body;