import React, { useEffect } from 'react';
import {
    useParams,
    Link
} from "react-router-dom";

import './ForumBody.css';

import Post from './Post';

function ForumBody(props) {

    let { forum } = useParams();

    useEffect(() => {
        console.log('fetch posts: ', forum);
    }, [forum])

    return (
        <div className="forumBody__container">
            <div className="forumBody__div">

                <div className="forumBody__title">
                    <div className="forumBody__title__name">
                        <span className="forumBody__title__icon">
                            <img src="/icon/nba_icon.png" width="50" />
                        </span>
                        <h1>看板名稱</h1>
                    </div>
                </div>

                <Post title="test title" username="user 01" pushnum="15" replynum="55"
                    titleText="This is my first test post" />
                <Post title="test title" username="user 01" pushnum="15" replynum="55"
                    titleText="This is my first test post" />
                <Post title="test title" username="user 01" pushnum="15" replynum="55"
                    titleText="This is my first test post" />
                <Post title="test title" username="user 01" pushnum="15" replynum="55"
                    titleText="This is my first test post" />
                <Post title="test title" username="user 01" pushnum="15" replynum="55"
                    titleText="This is my first test post" />
                <Post title="test title" username="user 01" pushnum="15" replynum="55"
                    titleText="This is my first test post" />
                <Post title="test title" username="user 01" pushnum="15" replynum="55"
                    titleText="This is my first test post" />
                <Post title="test title" username="user 01" pushnum="15" replynum="55"
                    titleText="This is my first test post" />
                <Post title="test title" username="user 01" pushnum="15" replynum="55"
                    titleText="This is my first test post" />

                <Post title="test title" username="user 01" pushnum="15" replynum="55"
                    titleText="This is my first test post" />

                <div className="forumBody__footer">

                </div>

            </div>
        </div>
    );

}

export default ForumBody;