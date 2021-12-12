import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { updateReview, deleteReview } from "../../services/review-services";
import { findUserById } from "../../services/user-services";

const RecipeReview = ({ review, setReview, user }) => {
  const [reviewer, setReviewer] = useState({});
  const [authorizeDelete, setAuthorizeDelete] = useState(true);

  const generateStar = (num) => {
    let iterateArr = [...Array(Math.floor(num)).keys()];
    let isHalf = Number.isInteger(num);
    return (
      <div className="star">
        {iterateArr.map((item) => (
          <i className="fa fa-star" />
        ))}
        {isHalf ? "" : <i className="fa fa-star-half" />}
      </div>
    );
  };

  const formatDate = (datee) => {
    let dateee = datee + "";
    return dateee.substr(0, 10);
  };

  // call db, and filter in local state
  const deleteUserReview = (reviewId, reviewer) => {
    if (reviewer && reviewer.userName !== user.userName) {
      console.log("You are not authorized to delete this review");
      setAuthorizeDelete(false);
      return;
    } else {
      // access db and delete
      deleteReview(reviewId);
      // filter for front end
      setReview((prevState) =>
        prevState.filter((existingReview) => existingReview._id !== reviewId)
      );
    }
  };

  const updateUserReview = (reviewId, updatedReview) => {
    updateReview(reviewId, updatedReview);
  };

  const getReviewer = (userId) => {
    return findUserById(userId)
      .then((response) => response.json())
      .then((user) => user !== null && setReviewer(user));
  };

  useEffect(() => getReviewer(review.UserId), []);
  /*
  TODO:
  format error message  
  */

  return (
    <>
      {authorizeDelete === false && (
        <p>You are not authorized to delete this review</p>
      )}
      <div className="recipereview-container">
        <div className="recipereview-title">
          <img
            className="defaultProfile"
            src="/pic/profile.jpg"
            alt="defaultProfile"
          />
          <div className="reviewer-detail">
            <i
              onClick={() => deleteUserReview(review._id, reviewer)}
              className="fas fa-times fa-pull-right"
            ></i>

            <span>
              {review.UserId && (
                <Link to={`/profile/${review.UserId}`}>
                  {reviewer["userName"] || "undefined"}
                </Link>
              )}
              {!review.UserId && "Author: " + review.AuthorId}
            </span>

            <span>{generateStar(review.Rating)}</span>
            <span>{formatDate(review.DateSubmitted)}</span>
            <p className="recipereview-reviews">{review.Review}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeReview;
