import React from 'react';
import './Post.css';

import Avatar from '@material-ui/core/Avatar';

import { useHistory, useLocation, Link } from "react-router-dom";

// male / female / 頭像
// 匿名 / 使用者名稱
// 標題
// 文章前幾行預覽 ; 文章預覽圖片
// 按讚數/推文數 ; 回應數 ; 

function Post(props) {

    let history = useHistory();
    let location = useLocation();

    const get_first_letter = (s) => {
        return s[0].toUpperCase();
    }

    const link_click = () => {
        console.log("link click ", props.title);
        history.push(location.pathname + "/home");
        // console.log(location.pathname);
    }

    return (
        <div className="post__container">
            <article className="post__article">
                <div className="post__div">

                    <div className="post__div__top">
                        <div className="post__username">
                            <Avatar className="post__avatar">
                                {get_first_letter(props.username)}
                            </Avatar>
                            <h3>
                                {props.username}
                            </h3>
                        </div>
                    </div>
                    <div className="post__div__bot">
                        <div className="post__bot__left">
                            <Link to={
                                {
                                    pathname: location.pathname + "/p/12345",
                                    state: { modal: true },
                                }
                            } >
                                <h2>
                                    {props.title}
                                </h2>
                            </Link>
                            <p>
                                這是文章內容，這是文章內容，這是文章內容，這是文章內容，這是文章內容，這是文章內容，
                            </p>
                            <div className="post_bot__left__other">
                                <div className="post__bot__left__other__push">
                                    <h3>推文{' '}{props.pushnum == '' ? '0' : props.pushnum}</h3>
                                </div>
                                <div className="post__bot__left__other__reply">
                                    <h3>回應{' '}12345678</h3>
                                </div>
                                <div className="post__bot__left__other__other">

                                </div>
                            </div>
                        </div>
                        <div className="psot__bot__right">

                        </div>
                    </div>
                </div>

            </article>
        </div>
    );
}

export default Post;