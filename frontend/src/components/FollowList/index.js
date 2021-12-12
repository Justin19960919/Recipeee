import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import FollowListItem from "./FollowListItem";
import {getUserFollows} from "../../services/ProfileService";


const FollowList = () => {
    const follow = useSelector((state)=> state.follow);
    // const dispatch = useDispatch();
    // useEffect(() => getUserFollows(dispatch), [])
    // const [follow, setFollow] = useState([])
    // useEffect(() => getUserFollows().then(follow => setFollow(follow)));

    return(
        <ul className="list-group mt-4">
            <li className="list-group-item wd-beige wd-black wd-border">
                <strong>Following</strong>
            </li>
            {
                follow.map(follow => {
                        return (
                            <FollowListItem follow={follow}/>
                        )
                    }
                )
            }
        </ul>
    )
};
export default FollowList;


