import React from "react";
import "./index.css"
import {Link} from "react-router-dom";

const UserFollowListItem = ({
                                 follow = {
                                     Username: "test",
                                     OtherId: "test",
                                     FollowName: 'test',
                                 }
                             }) => {
    return (
        <li className="list-group-item bg-like">
            <Link to={`/profile/${follow.OtherId}`} className="fw-bold like-name link-primary">{follow.FollowName}</Link>
        </li>
    );
}
export default UserFollowListItem;