import React from "react";
import "./index.css";


const RecipeDetail = ({ recipeDetail }) => {
  return (
    <div className="all-black">
      <p>{recipeDetail.AuthorId}</p>
      <p>{recipeDetail.Keywords}</p>
      <p>{recipeDetail.DatePublished}</p>
      <p>{recipeDetail.Description}</p>
      <p>{recipeDetail.Images}</p>
      <p>{recipeDetail.RecipeCategory}</p>
      <p>{recipeDetail.RecipeIngredientQuantities}</p>
      <p>{recipeDetail.RecipeIngredientParts}</p>
      <p>{recipeDetail.AggregatedRating}</p>
      <p>{recipeDetail.ReviewCount}</p>
      <p>{recipeDetail.Calories}</p>
      <p>{recipeDetail.RecipeInstructions}</p>
      <p>{recipeDetail.LikeNum}</p>
      <p>{recipeDetail.StarNum}</p>
    </div>
  );
}

export default RecipeDetail;
