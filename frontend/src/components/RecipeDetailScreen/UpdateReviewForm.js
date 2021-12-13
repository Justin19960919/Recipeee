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
        className="form-control form-control-md"
        placeholder="Leave a comment"
        value={review.Review}
        onChange={(e) => setReview({ ...review, Review: e.target.value })}
        required
      />
      <br />
      <input
        className="form-control form-control-md"
        placeholder="Leave a rating"
        value={review.Rating}
        onChange={(e) => setReview({ ...review, Rating: e.target.value })}
        required
      />
      <br />
      <button
        onClick={submitUpdateHandler}
        className="btn btn-md btn-light"
      >
        Submit
      </button>
    </div>
  )
}


export default UpdateReviewForm;