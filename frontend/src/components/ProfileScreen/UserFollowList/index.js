import React from "react";
import UserFollowListItem from "./UserFollowListItem";
import "./index.css"

const UserFollowList = ({follows}) => {
    return (
        <ul className="list-group">
            <li className="list-group-item bg-like-head">
                <p className="fw-bold like-head m-0">Follow List</p>
            </li>

            {(() => {
                if (follows !== undefined && follows.length > 0) {
                    return follows.map(follow => {
                        return(<UserFollowListItem follow={follow}/>);
                    })
                }
            })()}
        </ul>
    );
}

export default UserFollowList;