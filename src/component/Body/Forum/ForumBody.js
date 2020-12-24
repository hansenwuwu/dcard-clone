import React, { Component } from 'react';

import './ForumBody.css';

class ForumBody extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     currentForum: 'none',
        //     isLogin: false
        // };

        // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        // this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    render() {
        return (
            <div className="forumBody__container">
                <div className="forumBody__div">
                    <div className="forumBody__titleImage">

                    </div>
                    <div className="forumBody__title">

                    </div>

                    <div className="forumBody__fillBlock">,</div>
                    <div className="forumBody__fillBlock">,</div>
                    <div className="forumBody__fillBlock">,</div>
                    <div className="forumBody__fillBlock">,</div>
                    <div className="forumBody__fillBlock">,</div>
                    <div className="forumBody__fillBlock">,</div>
                    <div className="forumBody__fillBlock">,</div>
                    <div className="forumBody__fillBlock">,</div>
                    <div className="forumBody__fillBlock">,</div>

                </div>

            </div>
        );
    }

}

export default ForumBody;