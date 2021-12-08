import React from "react";
import "./index.css";
import RecipeSlideShow from "../RecipeSlideShow";


const RecipeDetail = ({ recipeDetail }) => {
  
  function listout(details){
    let data = details.substring(3,details.length-2)
    data = data.split('", "')
    return data
  }
  function print1(list1, list2){
    list1 = listout(list1)
    list2 = listout(list2)
    let lists = list1.map(function(value,index){
      return <li>{value} :<span>{list2[index]}</span></li>;
    })
    return lists
  }

  function print2(list1){
    list1 = listout(list1)
    let lists = list1.map(function(value){
      return <li>{value}</li>;
    })
    return lists
  }
  // listout(recipeDetail.RecipeIngredientQuantities)
  return (
    <div className="recipeDetail-container">
      <h2>{recipeDetail.Name}</h2>
      <p className="category-word"><span>Category: {recipeDetail.RecipeCategory}</span><span>Calories: {recipeDetail.Calories}</span></p>
      
      <div className="auther-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
        <div className="auther-title-detail">
          <h6>{recipeDetail.AuthorId}</h6>
          <h6>{recipeDetail.DatePublished.substring(0,10)}</h6>
          <h6>#{recipeDetail.Keywords}</h6>
        </div>
        <div className="like-star-container">
          <button type="button" class="btn ">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
            {recipeDetail.LikeNum}
          </button>
          <button type="button" class="btn ">Rating: {recipeDetail.AggregatedRating}</button>
          <button type="button" class="btn ">Reviews: {recipeDetail.ReviewCount}</button>
        </div>
      </div>
      <div className="img-container">
        <RecipeSlideShow props={recipeDetail.Images}/>
      </div> 
      <div className="recipeDetail-content-container">
        <div className="desctription-container">
          <h4>Description</h4><p>{recipeDetail.Description}</p>
        </div>
        <div className="ingredient-container">
          <h4>Ingredient</h4>
          <ul>
            {print1(recipeDetail.RecipeIngredientParts,recipeDetail.RecipeIngredientQuantities)}
          </ul>
        </div>
        <div className="instructions-container">
          <h4>Instructions</h4>
          <ul>
            {print2(recipeDetail.RecipeInstructions)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
