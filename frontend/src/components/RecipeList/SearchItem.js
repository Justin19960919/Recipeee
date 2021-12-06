import React, {useState} from "react";
import "./index.css";

const SearchItem = ({recipe}) => {

  const formatDate = (date) => {
    return date.split("T")[0];
  }

  const [editAction, setEditAction] = useState(false);
  const [deleteAction, setDeleteAction] = useState(false);

  return (
    <div className="details-container">
      <img src="/pic/2.jpg"/>

      <div className="content-container">
        <h5 className="detail-title">{recipe.Name}</h5>
        <h6 className="descript">{recipe.Description}</h6>
        <span className="author">by {recipe.AuthorId}</span><br/>
        
        <span className="date">{formatDate(recipe.DatePublished)}</span><br/>
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


export default SearchItem;