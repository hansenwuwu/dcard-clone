import React, { Component } from 'react';
import './Post.css';

// male / female / 頭像
// 匿名 / 使用者名稱
// 標題
// 文章前幾行預覽 ; 文章預覽圖片
// 按讚數/推文數 ; 回應數 ; 

class Post extends Component {
    render() {
        return (
            <div className="post__container">
                <article className="post__article">
                    <div className="post__div">

                        <div className="post__div__top">
                            <div className="post__username">
                                <h3>
                                    {this.props.username}
                                </h3>
                            </div>
                        </div>
                        <div className="post__div__bot">

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