import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./index.css";

// import services
import recipeService from "../../services/recipe-services";


const RecipeDetail = () => {
  ///// Helper functions ///////
  const formatDate = (date) => {
    return date.split("T")[0];
  }

  // fetch parameters using this function
  // params.id
  const params = useParams();

  ////////// Recipe Detail ///////////
  const [recipeDetail, setRecipeDetail] = useState({});

  // get recipe detail
  const getRecipeDetail = () => {
    recipeService.searchRecipeById(params.id)
      .then(response => setRecipeDetail(response));
  }
  // call once, when component loads
  useEffect(getRecipeDetail, []);


  ///////// Reviews /////////




  return(
      <div>
        <p>{recipeDetail.Name}</p>
        <p>{recipeDetail.AuthorId}</p>
        <div>
          {recipeDetail.Keywords.map(keyword =>
            <p>{keyword}</p>
          )}
        </div>

        <p>{formatDate(recipeDetail.DatePublished)}</p>
        <p>{recipeDetail.Description}</p>
        {/*// images*/}
        <p>{recipeDetail.RecipeCategory}</p>
        <p>{recipeDetail.RecipeIngredientQuantities}</p>
        <p>{recipeDetail.RecipeIngredientParts}</p>
        <p>{recipeDetail.AggregatedRating}</p>
        <p>{recipeDetail.ReviewCount}</p>
        <p>{recipeDetail.Calories}</p>
        <p>{recipeDetail.RecipeInstructions}</p>
        <p>{recipeDetail.LikeNum}</p>
        <p>{recipeDetail.StarNum}</p>

        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>


      </div>
  );
}

export default RecipeDetail;
