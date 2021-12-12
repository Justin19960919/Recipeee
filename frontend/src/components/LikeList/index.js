import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import RecipeItem from "../RecipeList/RecipeItem";

const LikeList = () => {
    const recipe = useSelector((state)=> state.recipe);
    // const dispatch = useDispatch();
    // useEffect(() => getUserFollows(dispatch), [])
    // const [follow, setFollow] = useState([])
    // useEffect(() => getUserFollows().then(follow => setFollow(follow)));

    return(
        <ul className="list-group mt-4">
            <li className="list-group-item wd-beige wd-black">
                <strong>What I like</strong>
            </li>
            {
                recipe.map(follow => {
                        return (
                            <RecipeItem recipe={recipe}/>
                        )
                    }
                )
            }
        </ul>
    )
};
export default LikeList;


