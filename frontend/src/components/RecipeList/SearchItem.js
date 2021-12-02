import React from "react";
import "./index.css";

const SearchItem = ({recipe}) => {
 return (
  <div className="details-container">
    <img src="/pic/2.jpg"/>
    <div className="content-container">
    <h5 className="detail-title">Recipe Name</h5>
    <span className="descript">brief description</span>
    <span className="author">By AuthorId</span>
    <span className="date">09/01/2020</span> 
    <span className="reviews">  &#9733; 4.9 (2000)</span> 
    </div>
    {/* <p>
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
    <p>{recipe.StarNum}</p> */}
  </div>
  )
}


export default SearchItem;