import React from "react";
import FollowListItem from "./FollowListItem";


const FollowList = ({follows}) => {
    console.log(follows);
    return(
        <ul className="list-group mt-4">
            <li className="list-group-item wd-beige wd-black wd-border text-start">
                <span className="fw-bold fs-5">Following</span>
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


