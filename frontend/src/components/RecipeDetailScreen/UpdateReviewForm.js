import React, { useState } from "react";
import { updateReview } from "../../services/review-services";
import { useHistory } from "react-router-dom";

const UpdateReviewForm = (curReview) => {
  const [review, setReview] = useState(curReview);
  const submitUpdateHandler = () => {
    updateReview(review._id, review);
    history.goBack();
  }

  const history = useHistory();
  return (
    <>
      <input
        className="form-control form-control-lg"
        placeholder="Leave a comment"
        value={review.Review}
        onChange={(e) => setReview({ ...review, Review: e.target.value })}
        required
      />
      <input
        className="form-control form-control-lg"
        placeholder="Leave a rating"
        value={review.Rating}
        onChange={(e) => setReview({ ...review, Rating: e.target.value })}
        required
      />
      <button
        onClick={submitUpdateHandler}
        className="btn btn-lg btn-dark"
      >
        Submit
      </button>
    </>
  )
}


export default UpdateReviewForm;