import React, {useEffect, useState} from "react";
import "./index.css"
import {searchRecipeById} from "../../../services/recipe-services";
import {Link} from "react-router-dom";

const UserLikeListItem = ({
                                 like = {
                                     RecipeId: 1,
                                     Username: 'test',
                                 }
                             }) => {
    const [recipe, setRecipe] = useState({});
    const getRecipe = () => {
        searchRecipeById(like.RecipeId)
            .then(recipe => {
                setRecipe(recipe);
            });
    }
    useEffect(getRecipe, []);

    return (
        <li className="list-group-item bg-like">
            <Link to={`/recipe-detail/${recipe._id}`} className="fw-bold like-name link-primary">{recipe.Name}</Link>
            <br/>
            <span>@{recipe.AuthorName}</span>
        </li>
    );
}
export default UserLikeListItem;