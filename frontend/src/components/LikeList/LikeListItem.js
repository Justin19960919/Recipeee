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
            <div className="row ">
                <div className="col-10 text-start">
                    <Link to={`/recipe-detail/${recipe._id}`} className="fs-5 fw-bold like-name link-primary">{recipe.Name}</Link>
                    <br/>
                    <span>@{recipe.AuthorName}</span>
                </div>

                <div className="col-2">
                    <button className="btn btn-primary override-bs rounded-pill float-end ">UnLike</button>
                </div>
            </div>
        </li>
    );
}
export default LikeListItem;