import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import FollowListItem from "./FollowListItem";
import {getUserFollows} from "../../services/ProfileService";


const FollowList = ({follows}) => {
    console.log(follows);
    return(
        <ul className="list-group mt-4">
            <li className="list-group-item wd-beige wd-black wd-border">
                <strong>Following</strong>
            </li>
            {(() => {
                if (follows !== undefined && follows.length > 0) {
                    return follows.map(follow => {
                        return(<FollowListItem follow={follow}/>);
                    })
                }
            })()}
        </ul>
    )
};
export default FollowList;


