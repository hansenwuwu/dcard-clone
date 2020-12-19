import React, { Component } from 'react';



class ForumOption extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const icon = this.props.icon;
        return (
            <div>
                <div className="sidebarOption">
                    <div className="sidebarOption__container">
                        {/* <Icon className="sidebarOption__icon" /> */}
                        <img src="/icon/game_icon.png" width="30" />
                        <h2>{this.props.text}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForumOption;