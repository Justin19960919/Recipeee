import React, {useEffect, useState} from "react";
import {searchRecipeById} from "../../services/recipe-services";
import {Link} from "react-router-dom";

const LikeListItem = ({
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
        <li className="list-group-item wd-beige wd-black wd-border text-start">
            <Link to={`/recipe-detail/${recipe._id}`} className="fs-5 fw-bold like-name link-primary">{recipe.Name}</Link>
            <br/>
            <span>@{recipe.AuthorName}</span>
        </li>
    );
}
export default LikeListItem;