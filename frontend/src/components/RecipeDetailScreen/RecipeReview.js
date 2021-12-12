import { Link } from "react-router-dom";
import "./index.css";
import { updateReview, deleteReview } from "../../services/review-services";
// import { findUserById } from "../../services/user-services";

const RecipeReview = ({ review, setReview, user }) => {
  const generateStar = (num) => {
    let iterateArr = [...Array(Math.floor(num)).keys()];
    return (
      <div className="star">
        {iterateArr.map((item) => (
          <i class="fa fa-star" />
        ))}
      </div>
    );
  };

  const formatDate = (datee) => {
    let dateee = datee + "";
    return dateee.substr(0, 10);
  };

  // only the user who left the review has delete button
  const deleteUserReview = (reviewId) => {
    // access db and delete
    deleteReview(reviewId);
    // filter for front end
    setReview((prevState) =>
      prevState.filter((existingReview) => existingReview._id !== reviewId)
    );
  };

  const hasDeletePrivilege =
    (user && user._id === review.UserId) || (user && user.type === "admin");

  return (
    <>
      <div className="recipereview-container" key={review._id}>
        <div className="recipereview-title">
          <img
            className="defaultProfile"
            src="/pic/profile.jpg"
            alt="defaultProfile"
          />
          <div className="reviewer-detail">
            {hasDeletePrivilege && (
              <i
                onClick={() => deleteUserReview(review._id)}
                className="fas fa-times fa-pull-right"
              ></i>
            )}
            <span>
              {user && user._id !== review.UserId && (
                <Link to={`/profile/${review.UserId}`}>
                  {review.UserName || "undefined"}
                </Link>
              )}
              {user && user._id === review.UserId && <p>{user.userName}</p>}
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
