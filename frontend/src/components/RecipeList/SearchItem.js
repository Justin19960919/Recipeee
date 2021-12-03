import React from "react";
import {Link}  from "react-router-dom";
import "./index.css";


const SearchItem = ({recipe}) => {

  const formatDate = (date) => {
    return date.split("T")[0];
  }

  return (
    <div className="details-container">
      <img src="/pic/2.jpg"/>

      <div className="content-container">

        <Link
            className="detail-title"
            to={`/recipe-detail/${recipe._id}`}
        >
          {recipe.Name}
        </Link>

        <span className="descript">{recipe.Description}</span>
        <span className="author">{recipe.AuthorId}</span>
        <span className="date">{formatDate(recipe.DatePublished)}</span>

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
  )
}


export default SearchItem;
