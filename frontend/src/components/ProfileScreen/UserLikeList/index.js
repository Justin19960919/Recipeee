import React from "react";
import UserLikeListItem from "./UserLikeListItem";
import "./index.css"

const UserLikeList = ({likes}) => {
    return (
        <ul className="list-group">
            <li className="list-group-item bg-like-head">
                <p className="fw-bold like-head m-0">Like List</p>
            </li>

            {(() => {
                if (likes !== undefined && likes.length > 0) {
                    return likes.map(like => {
                        return(<UserLikeListItem like={like}/>);
                    })
                }
            })()}
        </ul>
    );
}

export default UserLikeList;