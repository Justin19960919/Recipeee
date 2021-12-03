import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./index.css";

// import services
import recipeService from "../../services/recipe-services";


const RecipeDetail = () => {
  
  // fetch parameters using this function
  // params.id
  const params = useParams();
  
  const [recipeDetail, setRecipeDetail] = useState({});

  // get recipe detail
  const getRecipeDetail = () => {
    recipeService.searchRecipeById(params.id)
      .then(response => setRecipeDetail(response));
  }
  // call once, when component loads
  useEffect(getRecipeDetail, []);


  return(
      <div>
        <p>{JSON.stringify(recipeDetail)}</p> 
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
  );
}

export default RecipeDetail;
