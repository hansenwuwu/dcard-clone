import React, { useEffect } from 'react';
import {
    useParams,
} from "react-router-dom";

import './ForumBody.css';

import Post from './Post';

function ForumBody(props) {

    const gossiping_posts = [
        {
            'author': 'NARUTO', 'article_name': 'Re: [問卦] 政黑板熱度跌出10名外？',
            'push': '', 'href': '/bbs/Gossiping/M.1609246485.A.470.html', 'mark': ''
        },
        {
            'author': 'afa5644ti', 'article_name': '[問卦] 坂道成員暱稱大集合',
            'push': '', 'href': '/bbs/Gossiping/M.1609246467.A.4F8.html', 'mark': ''
        },
        {
            'author': 'kauosong', 'article_name': 'Re: [問卦] 對岸網友反問台灣人願意讓金門馬祖獨立嗎',
            'push': '', 'href': '/bbs/Gossiping/M.1609246455.A.D30.html', 'mark': ''
        },
        {
            'author': 'takuya2323', 'article_name': 'Re: [問卦] 帥哥的擇偶條件都很實際的卦',
            'push': '1', 'href': '/bbs/Gossiping/M.1609246430.A.D98.html', 'mark': ''
        },
        {
            'author': 'trylin', 'article_name': 'Re: [新聞] 宜蘭縣反萊豬 陳時中：地方了解不夠加強',
            'push': '1', 'href': '/bbs/Gossiping/M.1609246343.A.298.html', 'mark': ''
        },
        {
            'author': 'pptsuck', 'article_name': '[問卦] 有沒台女故意裝醜臉的八卦==?',
            'push': '', 'href': '/bbs/Gossiping/M.1609246328.A.615.html', 'mark': ''
        },
        {
            'author': 'nonpolar', 'article_name': '[問卦] 有劉墉的卦嗎??',
            'push': '9', 'href': '/bbs/Gossiping/M.1609246281.A.CB1.html', 'mark': ''
        },
        {
            'author': 'IamCuteGirl', 'article_name': '[問卦] 幹 爭鮮的彩蛋就是爛',
            'push': '5', 'href': '/bbs/Gossiping/M.1609246262.A.AD9.html', 'mark': ''
        },
        {
            'author': 'er2', 'article_name': '[問卦] 有沒有很冷不能叫寒浪的卦',
            'push': '3', 'href': '/bbs/Gossiping/M.1609246186.A.B9A.html', 'mark': ''
        },
        {
            'author': 'Moonlander', 'article_name': '[新聞] 支持度快追上國民黨 民眾黨：獲多數沈默',
            'push': '29', 'href': '/bbs/Gossiping/M.1609246156.A.E75.html', 'mark': ''
        }];

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
                            <img src="/icon/gossip_icon.svg" width="50" />
                        </span>
                        <h1>{forum}</h1>
                    </div>
                </div>

                {
                    gossiping_posts.map(
                        (post) => {
                            return <Post
                                title={post.article_name}
                                username={post.author}
                                pushnum={post.push}
                                titleText="This is my first test post"
                            />
                        }
                    )
                }


                {/* <Post title="test title" username="user 01" pushnum="15" replynum="55"
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
                    titleText="This is my first test post" /> */}

                <div className="forumBody__footer">

                </div>

            </div>
        </div>
    );

}

export default ForumBody;