import React, { useState } from "react";
import './index.css';
//import reviewService from "../../services/review-services";

const LeaveReviewForm = ({ setCurReviews }) => {

  const [comment, setComment] = useState("");

  const submitReviewHandler = () => {
    console.log("Leaving review!");
    // call create review from review-service
    // add to local state here
  }

  return (
    <div className="leaveReview-container">
    <h4>Comments</h4>
    <div className="leaveReview-input-container">
      <input
        className="form-control form-control-lg"
        placeholder="Leave a comment"
        value={comment}
        onChange={
          (e) => setComment(e.target.value)
        }
      />

      <button onClick={submitReviewHandler} className="comment-button">Submit</button>
    </div>
    </div>
  )
}

export default LeaveReviewForm;