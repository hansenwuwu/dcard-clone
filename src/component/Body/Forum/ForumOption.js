import React, { Component } from 'react';

import './ForumOption.css';

class ForumOption extends Component {
    render() {
        return (
            <div>
                <a href="#" className="forumListFixed__option__a">
                    <div className="forumListFixed__option__div1">
                        <span className="forumListFixed__option__icon">
                            <img src="/icon/game_icon.png" width="30" />
                        </span>
                        <div className="forumListFixed__option__text">
                            {this.props.text}
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default ForumOption;