import React, { useEffect } from 'react';

import './ForumList.css'

import ForumOption from './ForumOption';

function ForumList(props) {

    const popular_forum_list = [
        { 'board_name': 'Gossiping', 'board_nuser': '11755' },
        { 'board_name': 'Stock', 'board_nuser': '5188' },
        { 'board_name': 'C_Chat', 'board_nuser': '5049' },
        { 'board_name': 'NBA', 'board_nuser': '2246' },
        { 'board_name': 'Baseball', 'board_nuser': '1730' },
        { 'board_name': 'Lifeismoney', 'board_nuser': '1635' },
        { 'board_name': 'car', 'board_nuser': '908' },
        { 'board_name': 'LoL', 'board_nuser': '777' },
        { 'board_name': 'WomenTalk', 'board_nuser': '688' },
        { 'board_name': 'Beauty', 'board_nuser': '687' },
        { 'board_name': 'Boy-Girl', 'board_nuser': '660' },
        { 'board_name': 'HatePolitics', 'board_nuser': '647' },
        { 'board_name': 'MobileComm', 'board_nuser': '609' },
        { 'board_name': 'PC_Shopping', 'board_nuser': '590' },
        { 'board_name': 'Tech_Job', 'board_nuser': '569' },
        { 'board_name': 'sex', 'board_nuser': '560' },
        { 'board_name': 'e-shopping', 'board_nuser': '535' },
        { 'board_name': 'movie', 'board_nuser': '500' },
        { 'board_name': 'BabyMother', 'board_nuser': '470' },
        { 'board_name': 'creditcard', 'board_nuser': '452' }];

    useEffect(() => {

        console.log("forum list -> useEffect");
        console.log(popular_forum_list);

        // api fetch popular forum list

    }, [])

    return (
        <div className="forumList__container">
            <div className="forumList__title">
                <h2>即時熱門看板</h2>
            </div>
            <div className="forumList__list">
                {
                    popular_forum_list.map((item) => {
                        return <ForumOption url={`/forum/${item.board_name}`} text={item.board_name} image="/icon/gossip_icon.svg" />
                    })
                }
            </div>
        </div>
    );
}

export default ForumList;