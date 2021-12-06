import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import recipeService from "../../services/recipe-services";
import reviewService from "../../services/review-services";
import "./index.css";


const RecipeDetail = () => {
  ///// Helper functions ///////
  const formatDate = (date) => {
    return date.split("T")[0];
  }

  // fetch parameters using this function
  // params.id
  const params = useParams();
  const curRecipeId = params.id;
  
  ////////// Recipe Detail ///////////
  const [recipeDetail, setRecipeDetail] = useState({});
  const [recipeReviews, setRecipeReviews] = useState([]);
  const [comment, setComment] = useState("");

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

  // implement when user is created, need to do checks also
  const submitCommentHandler = () => {
    console.log("Leaving review!");
  }

  return(
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

        <input
            className="form-control form-control-lg mb-0.5"
            placeholder="Leave a comment"
            value={comment}
            onChange={
              (e) => setComment(e.target.value)
            }
        />
        <button
          onClick = {submitCommentHandler}
        >
          Submit
        </button>

        {
          recipeReviews.map(review =>
            <div>
              <p>{review.AuthorId}</p>
              <p>{review.UserId}</p>
              <p>{review.Rating}</p>
              <p>{review.Review}</p>
              <p>{review.DateSubmitted}</p>
              <p>{review.DateModified}</p>
            </div>
          )
        }
      </div>
  );
}

export default RecipeDetail;
