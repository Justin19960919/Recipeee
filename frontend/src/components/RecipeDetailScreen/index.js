// Detail screen
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import stylesheet
import "./index.css";

// import components
import Navigation from "../Navigation";
import Footer from "../Footer";
import RecipeDetail from "./RecipeDetail";
import RecipeReview from "./RecipeReview";
import LeaveReviewForm from "./LeaveReviewForm";


// import services
import { searchRecipeById } from "../../services/recipe-services";
import { searchReviewsByRecipeId } from "../../services/review-services";
import { getUserProfile } from "../../services/user-services";


const RecipeDetailScreen = () => {

  // fetch parameters using this function
  // params.id
  const params = useParams();
  const curRecipeId = params.id;
  const [recipeReviews, setRecipeReviews] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState({});
  const [user, setUser] = useState(null);

  ////// Check if user is logged in and pass as props ///////  
  const getProfile = () => {
    getUserProfile().then(res => res.json())
      .then(user => {
        setUser(user);
      }).catch(() => {
        setUser(null);
      });
  }

  // get recipe detail
  const getRecipeDetail = () => {
    searchRecipeById(curRecipeId)
      .then(response => setRecipeDetail(response));
  }

  // get reviews
  const getRecipeReviews = () => {
    searchReviewsByRecipeId(curRecipeId)
      .then(reviews => setRecipeReviews(reviews))
  }

  // call once, when component loads
  useEffect(getProfile, []);
  useEffect(getRecipeDetail, []);
  useEffect(getRecipeReviews, []);



  return (
    <>
      <Navigation />
      <RecipeDetail recipeDetail={recipeDetail} />
      <LeaveReviewForm
        setCurReviews={setRecipeReviews}
        recipeId={curRecipeId}
        authorId={recipeDetail.AuthorId}
        user={user}
      />
      {
        <div className="recipeReviews">
          {recipeReviews.map((review) => (
            <RecipeReview
              key={review._id}
              review={review}
              setReview={setRecipeReviews}
              user={user}
            />
          ))}
        </div>
      }
      <Footer />
    </>
  );
}

export default RecipeDetailScreen;
