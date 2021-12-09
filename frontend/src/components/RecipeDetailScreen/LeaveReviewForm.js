import React, { useState } from "react";
import $ from "jquery";

import "./index.css";
import "./stars.css";

//import reviewService from "../../services/review-services";

const LeaveReviewForm = ({ setCurReviews, recipeId, authorId }) => {

  const [comment, setComment] = useState("");

  // const submitReviewHandler = () => {
  //   console.log("Adding Review!");
  // call create review from review-service
  // add to local state here

  // const currentUser = 1;
  // const newReview = {
  //   RecipeId: recipeId,
  //   AuthorId: authorId,
  //   UserId: currentUser,
  //   Rating: null,
  //   Review: comment,
  //   DateSubmitted: new Date(),
  //   DateModified: new Date()
  // };

  // console.log("new created review is: ", newReview);
  // create new review via service
  // reviewService.createNewReview(newReview)
  // .then(response => response.json())
  // .then(newReview => setCurReviews(prevState => [newReview, ...prevState]));

  const submitReviewHandler = () => {
    let rating = $("input[type='radio']:checked").val();
    console.log(`User has left comment: ${comment}, with rating: ${rating}`);
  };

  const renderStars = () => {
    let sim = $("input[type='radio']:checked").val();
    if (sim < 3) {
      $(".myratings").css("color", "orange");
      $(".myratings").text(sim);
    } else {
      $(".myratings").css("color", "#02c402");
      $(".myratings").text(sim);
    }
  };

  return (
    <div className="leaveReview-container">
      <h4 className="leaveReview-title"> Comments </h4>
      <div className="leaveReview-input-container">
        <input
          className="form-control form-control-lg"
          placeholder="Leave a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <div className="star-card">
          <fieldset className="rating">
            <input
              onClick={renderStars}
              type="radio"
              id="star5"
              name="rating"
              value="5"
            />
            <label
              className="full"
              for="star5"
              title="Awesome - 5 stars"
            ></label>
            <input
              onClick={renderStars}
              type="radio"
              id="star4half"
              name="rating"
              value="4.5"
            />
            <label
              className="half"
              for="star4half"
              title="Pretty good - 4.5 stars"
            ></label>
            <input
              onClick={renderStars}
              type="radio"
              id="star4"
              name="rating"
              value="4"
            />
            <label
              className="full"
              for="star4"
              title="Pretty good - 4 stars"
            ></label>
            <input
              onClick={renderStars}
              type="radio"
              id="star3half"
              name="rating"
              value="3.5"
            />
            <label
              className="half"
              for="star3half"
              title="Meh - 3.5 stars"
            ></label>
            <input
              onClick={renderStars}
              type="radio"
              id="star3"
              name="rating"
              value="3"
            />
            <label className="full" for="star3" title="Meh - 3 stars"></label>
            <input
              onClick={renderStars}
              type="radio"
              id="star2half"
              name="rating"
              value="2.5"
            />
            <label
              className="half"
              for="star2half"
              title="Kinda bad - 2.5 stars"
            ></label>
            <input
              onClick={renderStars}
              type="radio"
              id="star2"
              name="rating"
              value="2"
            />
            <label
              className="full"
              for="star2"
              title="Kinda bad - 2 stars"
            ></label>
            <input
              onClick={renderStars}
              type="radio"
              id="star1half"
              name="rating"
              value="1.5"
            />
            <label
              className="half"
              for="star1half"
              title="Meh - 1.5 stars"
            ></label>
            <input
              onClick={renderStars}
              type="radio"
              id="star1"
              name="rating"
              value="1"
            />
            <label
              className="full"
              for="star1"
              title="Sucks big time - 1 star"
            ></label>
            <input
              onClick={renderStars}
              type="radio"
              id="starhalf"
              name="rating"
              value="0.5"
            />
            <label
              className="half"
              for="starhalf"
              title="Sucks big time - 0.5 stars"
            ></label>
            <input
              onClick={renderStars}
              type="radio"
              className="reset-option"
              name="rating"
              value="reset"
            />
          </fieldset>
          <span className="myratings"> 3 </span>
        </div>

        <button onClick={submitReviewHandler} className="comment-button">
          Submit
        </button>

      </div>
    </div>
  )
};

export default LeaveReviewForm;
