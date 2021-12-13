import React, { useState } from "react";
import { updateReview } from "../../services/review-services";
import "./index.css";

const UpdateReviewForm = ({ curReview, setCurReview, setNeedUpdate }) => {

  const [review, setReview] = useState(curReview);
  const submitUpdateHandler = () => {
    updateReview(review._id, review);
    setCurReview(review);
    setNeedUpdate(false);
  }

  return (
    <div className="update-flex">
      <input
        className="form-control form-control-md update-reviews-input"
        placeholder="Leave a comment"
        value={review.Review}
        onChange={(e) => setReview({ ...review, Review: e.target.value })}
        required
      />
      <input
        className="form-control form-control-md rating-input"
        placeholder="Leave a rating"
        value={review.Rating}
        onChange={(e) => setReview({ ...review, Rating: e.target.value })}
        required
      />
      <button
        onClick={submitUpdateHandler}
        className="btn btn-md update-submit"
      >
        Update
      </button>
    </div>
  )
}


export default UpdateReviewForm;