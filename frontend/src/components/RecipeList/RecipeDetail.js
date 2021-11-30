import React from "react";
import "./index.css";

const RecipeDetail = ({recipe}) => {
  <div className="container">
    <p>
      {recipe.Name}
    </p>
    <p>
      {recipe.AuthorId}
    </p>
    {
      recipe.Keywords.map(keyword =>
        <p>{keyword}</p>
      )
    }
    <p>{recipe.DatePublished}</p>
    <p>{recipe.Description}</p>
    <p>{recipe.Images}</p>
    <p>{recipe.RecipeCategory}</p>
    <p>{recipe.RecipeIngredientQuantities}</p>
    <p>{recipe.RecipeIngredientParts}</p>
    <p>{recipe.AggregatedRating}</p>
    <p>{recipe.ReviewCount}</p>
    <p>{recipe.Calories}</p>
    <p>{recipe.RecipeInstructions}</p>
    <p>{recipe.LikeNum}</p>
    <p>{recipe.StarNum}</p>
  </div>
}


export default RecipeDetail;