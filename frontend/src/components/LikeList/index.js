import React from "react";
import LikeListItem from "./LikeListItem";

const LikeList = ({likes}) => {
    return(
        <ul className="list-group mt-4">
            <li className="list-group-item wd-beige wd-black wd-border text-start">
                <span className="fw-bold fs-5">What I like</span>
            </li>
            {(() => {
                if (likes !== undefined && likes.length > 0) {
                    return likes.map(like => {
                        return(<LikeListItem like={like}/>);
                    })
                }
            })()}
        </ul>
    )
};
export default LikeList;


