import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const RecipeItem = ({ recipe }) => {

  const formatDate = (date) => {
    // console.log(date, typeof(date));
    return date.split("T")[0];
  }

  const getImage = (images) => {
    let firstImage = images.split(".jpg")[0] + ".jpg";
    return firstImage.startsWith("c") ? firstImage.substr(3) : firstImage.substr(1)
  }

  return (
    <div className="details-container">
      <img
        src={getImage(recipe.Images)}
        alt="recipe-image"
      />

      <div className="content-container">

        <h5 className="detail-title">
          <Link
            className="detail-title"
            to={`/recipe-detail/${recipe._id}`}
          >
            {recipe.Name}
          </Link>
        </h5>

        <h6 className="descript">{recipe.Description}</h6>
        <span className="author">by {recipe.AuthorId}</span><br />

        <span className="date">{formatDate(recipe.DatePublished)}</span><br />
        <div className="details-icon">
          <span>
            <i className="fas fa-star"></i>
            {recipe.StarNum}
          </span>
          <span>
            <i className="fas fa-thumbs-up"></i>
            {recipe.LikeNum}
          </span>
          <span>
            <i className="fas fa-comment-alt"></i>
            {recipe.ReviewCount}
          </span>
        </div>
      </div>
    </div>
  )
}


export default RecipeItem;
