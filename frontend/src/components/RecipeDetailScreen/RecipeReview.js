import "./index.css";

const RecipeReview = ({ review }) => {
  function generateStar(num) {
    return (
      <div className="star">
        {Array.from(Array(num)).map((x, index) => (
          <i class="fa fa-star" />
        ))}
      </div>
    );
  }

  return (
    <div className="recipereview-container">
      <div className="recipereview-title">
        <img
          className="defaultProfile"
          src="./pic/defaultProfile.jpg"
          alt="defaultProfile"
        />
        <div className="reviewer-detail">
          <span>{review.AuthorId}</span>
          <span>{generateStar(review.Rating)}</span>
          <span>{review.DateSubmitted.substring(0, 10)}</span>
          <p className="recipereview-reviews">{review.Review}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeReview;
