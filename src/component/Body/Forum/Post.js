import React, { Component } from 'react';
import './Post.css';

import Avatar from '@material-ui/core/Avatar';

// male / female / 頭像
// 匿名 / 使用者名稱
// 標題
// 文章前幾行預覽 ; 文章預覽圖片
// 按讚數/推文數 ; 回應數 ; 

class Post extends Component {

    get_first_letter(s) {
        console.log(s[0]);
        return s[0].toUpperCase();
    }
    // 

    render() {
        return (
            <div className="post__container">
                <article className="post__article">
                    <div className="post__div">

                        <div className="post__div__top">
                            <div className="post__username">
                                <Avatar className="post__avatar">
                                    {this.get_first_letter(this.props.username)}
                                </Avatar>
                                <h3>
                                    {this.props.username}
                                </h3>
                            </div>
                        </div>
                        <div className="post__div__bot">
                            <div className="post__bot__left"></div>
                            <div className="psot__bot__right"></div>
                        </div>

                        {/* <div className="post__username"></div>
                        <div className="post__title"></div> */}

                        {/* {this.props.title} */}
                    </div>

                </article>
            </div>
        );
    }
}

export default Post;