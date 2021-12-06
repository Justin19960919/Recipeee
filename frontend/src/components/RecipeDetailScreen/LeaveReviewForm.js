import React, { useState } from "react";
//import reviewService from "../../services/review-services";

const LeaveReviewForm = ({ setCurReviews }) => {

  const [comment, setComment] = useState("");

  const submitReviewHandler = () => {
    console.log("Leaving review!");
    // call create review from review-service
    // add to local state here
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