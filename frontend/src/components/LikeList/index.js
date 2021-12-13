import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import RecipeItem from "../RecipeList/RecipeItem";
import LikeListItem from "./LikeListItem";

const LikeList = ({likes}) => {
    return(
        <ul className="list-group mt-4">
            <li className="list-group-item wd-beige wd-black text-start">
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


