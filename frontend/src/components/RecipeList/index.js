import React, {useEffect, useState} from "react";
import RecipeDetail from "./RecipeDetail";
import recipeService from "../../services/recipe-services";
import "./index.css";


const RecipeList = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() =>
  //     recipeService.searchAllRecipes()
  //     .then(recipes => setSearchResults(recipes)),
  //     [])

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  }

  // search submit handler
  const searchSubmitHandler = () => {
    recipeService.searchRecipeByRecipeName(searchInput)
    .catch(err => console.log(err))
    .then(recipes => setSearchResults(recipes));
  }

  return(
      <>
        <input
          placeholder="Search for recipes"
          value={searchInput}
          onChange={searchInputHandler}
        />

        <button
            className="btn btn-primary rounded-pill"
            onClick={searchSubmitHandler}>
          Search
        </button>

      {
        searchResults.map(searchResult =>
            <li key={searchResult._id}>
              <RecipeDetail
                  recipe={searchResult}
              />
            </li>
        )
      }
      </>
  )
}

export default RecipeList;