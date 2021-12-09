// Detail screen
import React, { useEffect, useState } from "react";
import "./index.css";
import Navigation from "../Navigation";
import Footer from "../Footer";
import RecipeDetail from "./RecipeDetail";
import RecipeReview from "./RecipeReview";
import LeaveReviewForm from "./LeaveReviewForm";
import { useParams } from "react-router-dom";
import recipeService from "../../services/recipe-services";
import reviewService from "../../services/review-services";


const RecipeDetailScreen = () => {
  // fetch parameters using this function
  // params.id
  const params = useParams();
  const curRecipeId = params.id;

  ////////// Recipe Detail ///////////
  const [recipeDetail, setRecipeDetail] = useState({});
  const [recipeReviews, setRecipeReviews] = useState([]);


  // get recipe detail
  const getRecipeDetail = () => {
    recipeService.searchRecipeById(curRecipeId)
      .then(response => setRecipeDetail(response));
  }
  // get reviews
  const getRecipeReviews = () => {
    reviewService.searchReviewsByRecipeId(curRecipeId)
      .then(reviews => setRecipeReviews(reviews))
  }

  // call once, when component loads
  useEffect(getRecipeDetail, []);
  useEffect(getRecipeReviews, []);

  ////////////////////////////////////////////////////////////
  // implement when user is created, need to do checks also
  // const updateReviewHandler = () => {
  //   console.log("updating review!");
  // }

  // const deleteReviewHandler = () => {
  //   console.log("delete review!");
  // }

  return (
    <>
      <Navigation />

      <RecipeDetail recipeDetail={recipeDetail} />
      <LeaveReviewForm
        setCurReviews={setRecipeReviews}
        recipeId={curRecipeId}
        authorId={recipeDetail.AuthorId}
      />
      {
        recipeReviews.map(review =>
          <RecipeReview review={review} key={review._id} />
        )
      }
      <Footer />
    </>
  );
}

export default RecipeDetailScreen;
