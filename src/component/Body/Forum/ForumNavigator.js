import React, { Component } from 'react';

import './ForumNavigator.css';

import ForumListFixed from './ForumListFixed';
import ForumList from './ForumList';

const FORUMS = [
    { name: 'Sporting Goods', icon: '$49.99' },
    { name: 'Sporting Goods', icon: '$9.99' },
    { name: 'Sporting Goods', icon: '$29.99' },
    { name: 'Electronics', icon: '$99.99' },
    { name: 'Electronics', icon: '$399.99' },
    { name: 'Electronics', icon: '$199.99' }
];

class ForumNavigator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="forumNavigator__container">

                    <ForumListFixed className="forumNavigator__forumListFixed" />
                    <ForumList className="forumNavigator__forumList" />

                    {/* <SidebarOption text="所有看板" Icon={ListAltIcon} />
                    <SidebarOption text="即時熱門看板" Icon={WhatshotIcon} />
                    <SidebarOption text="好物研究室" Icon={StorefrontIcon} />
                    <SidebarOption text="遊戲專區" Icon={SportsEsportsIcon} />
                    <div className="sidebar__sub">
                        <SidebarCategory text="即時熱門看板" />
                        <SidebarAvatar
                            text="感情"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="心情"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="有趣"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美妝"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="女孩"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="穿搭"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarCategory text="Dcard 精選看板" />
                        <SidebarAvatar
                            text="時事"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                        <SidebarAvatar
                            text="美食"
                            image="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        />
                    </div> */}
                </div>
            </div>
        );
    }

}

export default ForumNavigator;