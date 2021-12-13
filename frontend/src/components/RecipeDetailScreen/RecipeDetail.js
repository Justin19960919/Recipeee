import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// import stylesheets
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import helper functions
import { getImageArray } from "../consts";
import { print1, print2, formatDate, generateStar, constructRecipeImageObjects } from "./recipeDetailHelper.js";
// import services
import { checkStarExists, checkLikeExists, likeRecipe, unLikeRecipe, updateRecipeLikes, starRecipe, unStarRecipe, updateRecipeStars } from "../../services/recipe-services";



const RecipeDetail = ({ recipeDetail, user }) => {
  const history = useHistory();

  const recipeImages = getImageArray(recipeDetail.Images);
  // console.log(`images: ${recipeImages}`);
  const recipeImageObjects = constructRecipeImageObjects(recipeImages);
  const [likeObject, setLikeObject] = useState(null);
  const [starObject, setStarObject] = useState(null);

  const [like, setLike] = useState(false);
  const [star, setStar] = useState(false);


  const checkLikeExistsHelper = () => {

    if (user !== undefined && user !== null) {
      checkLikeExists(user.userName, recipeDetail._id)
        .then(likeObjectResponse => likeObjectResponse.json())
        .then(
          likeObject => {
            console.log("like object: ", likeObject);
            if (likeObject != null) {
              setLikeObject(likeObject);
              setLike(true);
            }
          }
        )
    }
  }

  const checkStarExistsHelper = () => {

    if (user !== undefined && user !== null) {
      checkStarExists(user.userName, recipeDetail._id)
        .then(starObjectResponse => starObjectResponse.json())
        .then(
          starObject => {
            console.log(starObject);
            if (starObject != null) {
              setStarObject(starObject);
              setStar(true);
            }
          }
        )
    }
  }



  const likeRecipeHandler = () => {
    if (user === null) {
      history.push("/login");
    } else {
      // if pass, check status of user logged in or not
      if (like === false) {
        setLike(true);
        // create new Like, and increment like in recipe
        const newLike = {
          RecipeId: recipeDetail._id,
          Username: user.userName
        };
        const updatedRecipe = {
          ...recipeDetail,
          LikeNum: recipeDetail.LikeNum + 1
        };

        likeRecipe(newLike)
          .then(newLike => newLike.json())
          .then(newLikeObject => setLikeObject(newLikeObject));
        updateRecipeLikes(updatedRecipe);
      } else {
        setLike(false);
        // create new Like, and decrement like in recipe 
        const updatedRecipe = {
          ...recipeDetail,
          LikeNum: recipeDetail.LikeNum - 1
        };

        unLikeRecipe(likeObject._id);
        updateRecipeLikes(updatedRecipe);
      }
    }
  }

  const starRecipeHandler = () => {
    if (user === null) {
      history.push("/login");
    } else {
      // if pass, check status of user logged in or not
      if (star === false) {
        setStar(true);
        // create new Like, and increment like in recipe
        const newStar = {
          RecipeId: recipeDetail._id,
          Username: user.userName
        };
        const updatedRecipe = {
          ...recipeDetail,
          StarNum: recipeDetail.StarNum + 1
        };

        starRecipe(newStar)
          .then(newStar => newStar.json())
          .then(newStarObject => setStarObject(newStarObject));
        updateRecipeStars(updatedRecipe);
      } else {
        setStar(false);;
        // create new Like, and decrement like in recipe 
        const updatedRecipe = {
          ...recipeDetail,
          StarNum: recipeDetail.StarNum - 1
        };

        unStarRecipe(starObject._id);
        updateRecipeStars(updatedRecipe);
      }
    }
  }

  // call once
  useEffect(checkLikeExistsHelper, [recipeDetail._id, user]);
  useEffect(checkStarExistsHelper, [recipeDetail._id, user]);

  // render
  return (
    <div className="recipe-detail">
      <div className="author-container">
        <div className="author-detail">
          <h2 className="author-detail-title">{recipeDetail.Name}</h2>

          <p className="category">
            {recipeDetail.RecipeCategory}/{recipeDetail.Keywords}
          </p>

          <h6>{formatDate(recipeDetail.DatePublished)}</h6>

          <h6>Author: {recipeDetail.AuthorId}</h6>

          <div className="summary-detail">
            <p className="summary-detail-conponent edge">
              <span className="summary-detail-conponent-number">
                {recipeDetail.RecipeIngredientParts !== undefined &&
                  recipeDetail.RecipeIngredientParts.length}
              </span>
              <span>Ingredients</span>
            </p>
            <p className="summary-detail-conponent border-side">
              <span className="summary-detail-conponent-number">
                {recipeDetail.Calories}
              </span>
              <span>Calories</span>
            </p>
            <div class="justify-content-center">
              <div class="content text-center">
                <div class="ratings">
                  <span class="product-rating">
                    {recipeDetail.AggregatedRating}
                  </span>
                  <span>/5</span>
                  <div class="stars">
                    {generateStar(recipeDetail.AggregatedRating)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="icon">

            {/* like button  */}
            <button
              className="icon-button"
              onClick={() => likeRecipeHandler()}
            >
              <span
                className={`bi bi-hand-thumbs-up-fill ${(like && "fill") || (!like && "")}`} >
              </span>
            </button>

            {/* star button */}
            <button
              className="icon-button"
              onClick={() => starRecipeHandler()}>
              <span
                className={`bi bi-bookmark-fill ${(star && "fill") || (!star && "")}`}>
              </span>
            </button>

          </div>
        </div>

        {/* image carousel */}
        <div className="img-container">
          <div id="carouselExampleCaptions" className="carousel slide base recipe-detail-carousel" data-bs-ride="carousel">
            <div className="carousel-inner">
              {recipeImageObjects.map(recipe =>
                <div className={`carousel-item ${recipe.Active}`} key={recipe._id}>
                  <img src={recipe.Image} className="d-block mx-auto slides recipedetail-img" alt="recommended recipe" />
                </div>
              )}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon icon" ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon icon" ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>

      <div className="recipeDetail-content-container">
        <div className="desctription-container">
          <h4>Description</h4>
          <p>{recipeDetail.Description}</p>
        </div>
        <div className="ingredient-container">
          <h4>Ingredient</h4>
          <ul>
            {print1(
              recipeDetail.RecipeIngredientParts,
              recipeDetail.RecipeIngredientQuantities
            )}
          </ul>
        </div>
        <div className="instructions-container">
          <h4>Instructions</h4>
          <ul>{print2(recipeDetail.RecipeInstructions)}</ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
