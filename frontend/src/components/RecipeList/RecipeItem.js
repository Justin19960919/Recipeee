import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { getImageArray } from "../consts";

const RecipeItem = ({ recipe }) => {
  // console.log(`recipe: ${recipe.Images}`);
  const formatDate = (date) => {
    // console.log(date, typeof(date));
    return date.split("T")[0];
  }

  const getImage = (images) => {
    if(images.startsWith("[")){
      const afterParsing = images.substr(1, images.length - 2);
      // console.log(`after parsing: ${afterParsing}`);
      const parseArr = afterParsing.split(".jpg");
      // console.log(' first img: ', parseArr[0] + `.jpg"`);
      const firstImg = parseArr[0] + `.jpg`;
      console.log(firstImg);
      return firstImg.substr(1);
    }
    else if(images.startsWith("c")){
      console.log("arr string");
      return "";
    }
    else if(images === ""){
      console.log("empty string");
      return "";
    }
    else {
      console.log("normal string");
      return images.substr(1, images.length - 2);
    }
  }

  const img = getImage(recipe.Images);
  return (
    <div className="details-container">
      {
        img === "" &&
        <img
          src="/pic/ingredients.jpg"
          alt="recipe-image"
        />
      }
      {
        img !== "" &&
        <img
          src={img}
          alt="recipe-image"
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
