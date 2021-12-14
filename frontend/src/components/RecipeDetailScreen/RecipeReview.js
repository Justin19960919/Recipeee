import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { deleteReview } from "../../services/review-services";
import UpdateReviewForm from "./UpdateReviewForm";


const RecipeReview = ({ review, setReview, user }) => {
  // need update state
  const [needUpdate, setNeedUpdate] = useState(false);
  const [curReview, setCurReview] = useState(review);

  // generate star functions
  const generateStar = (num) => {
    // console.log(num, typeof(num));
    const wrongTypes = [undefined, null, "NA"];
    if (wrongTypes.includes(num)) {
      // null check
      return <p>No Stars</p>;
    } else {
      const newNum = parseFloat(num);
      let iterateArr = [...Array(Math.floor(newNum)).keys()];
      let isHalf = Number.isInteger(newNum);
      return (
        <div className="star">
          {iterateArr.map((item) => (
            <i className="fa fa-star" />
          ))}
          {isHalf ? "" : <i className="fa fa-star-half" />}
        </div>
      );
    }
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

  const hasUpdatePrivilege =
    (user && user._id === review.UserId) || (user && user.type === "admin");


  return (
    <>
      <div className="recipereview-container" key={curReview._id}>
        <div className="recipereview-title">
          <img
            className="defaultProfile"
            src="/pic/profile.jpg"
            alt="defaultProfile"
          />

          {
            !needUpdate &&
            <div className="reviewer-detail">
              {hasUpdatePrivilege && (
                <i
                  onClick={() => deleteUserReview(curReview._id)}
                  className="fas fa-times topRight"
                ></i>
              )}
              <span>
                {(user === undefined || (user && user._id !== curReview.UserId)) && (
                  <Link to={`/profile/${curReview.UserId}`}>
                    {curReview.UserName || "undefined"}
                  </Link>
                )}
                {user && user._id === curReview.UserId && <p>{user.userName} (Current user)</p>}
              </span>

              <span>{generateStar(curReview.Rating)}</span>
              <span>{formatDate(curReview.DateSubmitted)}</span>
              <p className="recipereview-reviews">{curReview.Review}</p>
              
              {
                hasUpdatePrivilege && (
                <i
                  class="fas fa-pen secondRight"
                  onClick={() => setNeedUpdate(true)}>
                </i>
                )
              }
            </div>
          }
          {
            needUpdate &&
            <UpdateReviewForm
              curReview={curReview}
              setCurReview={setCurReview}
              setNeedUpdate={setNeedUpdate}
            />
          }
        </div>
      </div>
    </>
  );
};

export default RecipeReview;
