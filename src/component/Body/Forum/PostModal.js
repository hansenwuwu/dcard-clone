import React from 'react'

import './PostModal.css';

function PostModal() {
    return (
        <div className="postModal__container">
            <div className="postModal__body">
                <h2 id="simple-modal-title">Text in a modal</h2>
                <p id="simple-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </p>
                <h1>this is a modal</h1>
            </div>
        </div>
    )
}

export default PostModal
