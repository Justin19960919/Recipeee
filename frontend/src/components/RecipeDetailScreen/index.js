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
import recipeService from "../../services/recipe-services";
import reviewService from "../../services/review-services";



const RecipeDetailScreen = () => {

  // fetch parameters using this function
  // params.id
  const params = useParams();
  const curRecipeId = params.id;

  ////////// Recipe Detail ///////////
  const defaultDetail = {
    _id: 42,
    Name: "Cabbage Soup",
    AuthorId: 1538,
    AuthorName: "Duckie067",
    DatePublished: "1999-09-19T06:19:00Z",
    Description: "Make and share this Cabbage Soup recipe from Food.com.",
    Images:
      '"https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/42/picVEMxk8.jpg"',
    RecipeCategory: "Vegetable",
    RecipeIngredientQuantities: 'c("46", "4", "1", "2", "1")',
    RecipeIngredientParts:
      'c("plain tomato juice", "cabbage", "onion", "carrots", "celery")',
    AggregatedRating: 4.5,
    ReviewCount: 11,
    Calories: 103.6,
    RecipeInstructions:
      'c("Mix everything together and bring to a boil.", "Reduce heat and simmer for 30 minutes (longer if you prefer your veggies to be soft).", "Refrigerate until cool.", "Serve chilled with sour cream.")',
  };
  const review1 = {
    _id: 177583,
    RecipeId: 42,
    AuthorId: 151591,
    AuthorName: "Annie M.",
    Rating: 2,
    Review: "Too bland 1",
    DateSubmitted: "2005-05-29T22:58:29Z",
    DateModified: "2005-05-29T22:58:29Z",
  };
  const review2 = {
    _id: 177584,
    RecipeId: 43,
    AuthorId: 151592,
    AuthorName: "ABC.",
    Rating: 1,
    Review: "Too bland 2",
    DateSubmitted: "2005-05-29T22:58:29Z",
    DateModified: "2005-05-29T22:58:29Z",
  };
  const defaultReviews = [review1, review2];
  const [recipeReviews, setRecipeReviews] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState({});


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



  return (
    <>
      <Navigation />
      {/* {JSON.stringify(recipeDetail)} */}
      {/* <RecipeDetail recipeDetail={recipeDetail} /> */}
      <LeaveReviewForm
        setCurReviews={setRecipeReviews}
        recipeId={curRecipeId}
        authorId={recipeDetail.AuthorId}
      />
      {
        <div className="recipeReviews">
          {recipeReviews.map((review) => (
            <RecipeReview
              review={review}
              setReview={setRecipeReviews}
              key={review._id} />
          ))}
        </div>
      }
      <Footer />
    </>
  );
}

export default RecipeDetailScreen;
