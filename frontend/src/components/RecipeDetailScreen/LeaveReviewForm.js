import React, { useState } from "react";
import reviewService from "../../services/review-services";

const LeaveReviewForm = ({ setCurReviews, recipeId, authorId }) => {

  const [comment, setComment] = useState("");

  const submitReviewHandler = () => {
    console.log("Adding Review!");
    // call create review from review-service
    // add to local state here

    const currentUser = 1;
    const newReview = {
      RecipeId: recipeId,
      AuthorId: authorId,
      UserId: currentUser,
      Rating: null,
      Review: comment,
      DateSubmitted: new Date(),
      DateModified: new Date()
    };

    console.log("new created review is: ", newReview);
    // create new review via service
    // reviewService.createNewReview(newReview)
    // .then(response => response.json())
    // .then(newReview => setCurReviews(prevState => [newReview, ...prevState]));
  }

  return (
    <>
      <input
        className="form-control form-control-lg mb-0.5"
        placeholder="Leave a comment"
        value={comment}
        onChange={
          (e) => setComment(e.target.value)
        }
      />

      <button
        onClick={submitReviewHandler}
      >
        Submit
      </button>
    </>
  )
}

export default LeaveReviewForm;