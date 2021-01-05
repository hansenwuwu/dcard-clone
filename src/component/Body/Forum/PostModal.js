import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './PostModal.css';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

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

            </div>
        </div>
    )
}

export default PostModal
