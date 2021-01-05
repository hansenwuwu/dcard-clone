import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './PostModal.css';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// read single paragraph

function PostModal(props) {
    return (
        <div className="postModal__container">

            <div className="postModal__header">
                <div className="postModal__header__author">

                    <div className="postModal__header__author__container">
                        <Avatar className="postModal__header__author__avatar">
                            E
                        </Avatar>
                        <h3>
                            Eric
                        </h3>
                    </div>

                    <div className="postModal__header__author__rightContainer">
                        <Button onClick={props.handleCloseButton}
                            className="postModal__closeButton">
                            <CloseIcon className="postModal__closeIcon">
                            </CloseIcon>
                        </Button>
                    </div>

                </div>
            </div>

            <div className="postModal__article">
                {/* title */}
                <div className="postModal__article__title">
                    <h2>這是範例文章標題</h2>
                </div>

                {/* date */}
                <div className="postModal__article__time">
                    {/* 看板連結 */}
                    <Link to="#">
                        <p className="postModal__article__time__forum">看板名稱</p>
                    </Link>

                    <p>。</p>
                    <p>11 月 26 日</p>
                </div>

                {/* article */}
                <div className="postModal__article__p">
                    <p>
                        這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例,
                        這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例,
                        這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例,
                        這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例, 這是文章範例,
                    </p>
                </div>

                {/* tag */}

                {/* likes */}

            </div>

        </div>
    )
}

export default PostModal
