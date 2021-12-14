import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { getImageArray } from "../consts";

const RecipeItem = ({ recipe }) => {
  console.log("recipe: ", recipe.Images);
  console.log("-------------");
  const formatDate = (date) => {
    return date.split("T")[0];
  }

  // const getImage = (images) => {
  //   if (images.startsWith("[")) {
  //     const afterParsing = images.substr(1, images.length - 2);
  //     const parseArr = afterParsing.split(".jpg");
  //     const firstImg = parseArr[0] + `.jpg`;
  //     return firstImg.substr(1);
  //   }
  //   else if (images.startsWith("c")) {
  //     return "";
  //   }
  //   else if (images === "") {
  //     return "";
  //   }
  //   else {
  //     return images.substr(1, images.length - 2);
  //   }
  // }

  const imgArray = getImageArray(recipe.Images);
  return (
    <div className="details-container">
      {
        imgArray.length === 0 &&
        <img
          src="/pic/invalidPhoto.jpg"
          alt="invalid"
        />
      }
      {
        imgArray.length !== 0 &&
        <img
          src={imgArray[0]}
          alt="recipe"
        />
      }
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
        <span className="author">by {recipe.AuthorId}</span>

        <span className="date">{formatDate(recipe.DatePublished)}</span>

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
