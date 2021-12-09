import "./index.css";
import { createNewReview, updateReview, deleteReview } from "../../services/review-services";


const RecipeReview = ({ review, setReview }) => {

  const generateStar = (num) => {
    let iterateArr = [...Array(Math.round(num)).keys()];
    return (
      <div className="star">
        {iterateArr.map(item => <i class="fa fa-star" />)}
      </div>
    )
  };

  const formatDate = (datee) => {
    let dateee = datee + "";
    return dateee.substr(0, 10);
  }


  // call db, and filter in local state
  const deleteUserReview = (reviewId) => {
    // access db and delete
    deleteReview(reviewId);
    // filter for front end 
    setReview(prevState => prevState.filter(existingReview => existingReview._id !== reviewId));
  }

  const updateUserReview = (reviewId, updatedReview) => {
    updateReview(reviewId, updatedReview)
  }



  return (
    <>

      <div className="recipereview-container">
        <div className="recipereview-title">
          <img
            className="defaultProfile"
            src="/pic/profile.jpg"
            alt="defaultProfile"
          />
          <div className="reviewer-detail">
            <span>{review.AuthorId}</span>
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
