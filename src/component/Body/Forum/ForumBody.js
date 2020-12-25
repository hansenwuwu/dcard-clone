import React, { Component } from 'react';

import './ForumBody.css';

import Post from './Post';

class ForumBody extends Component {

    render() {
        return (
            <div className="forumBody__container">
                <div className="forumBody__div">

                    {/* <div className="forumBody__titleImage">

                    </div> */}
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

}

export default ForumBody;