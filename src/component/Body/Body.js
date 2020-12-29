import React from 'react';
import {
    useParams,
    Link
} from "react-router-dom";

import './Body.css';

import Forum from './Forum/Forum';

function Body(props) {

    let { title } = useParams();

    return (
        <div className="body">
            <div className="body__container">

                {title === "forum" && <Forum />}

            </div>
        </div>
    );

}

export default Body;