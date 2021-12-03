import React, {useEffect, useState} from "react";
import SearchItem from "./SearchItem";
import recipeService from "../../services/recipe-services";
import "./index.css";
import RecipeDetail from "../RecipeDetail";


const RecipeList = () => {

  const recommendedRecipes = [
    {
      Name: "Low-Fat Berry Blue Frozen Dessert",
      AuthorId: "1533",
      Description: "Make and share this Low-Fat Berry Blue Frozen Dessert recipe from Food.com.",
      DatePublished: "1999-08-09T21:46:00.000Z",
      LikeNum: 0,
      StarNum: 0,
      ReviewCount: 4
    }
  ];

  const [searchResults, setSearchResults] = useState(recommendedRecipes);
  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  }

  const cleanSearchInput = (input) => {
    return input.trim();
  }

  // search submit handler
  // search all results in db
  //recipeService.searchAllRecipes().then(results => setSearchResults(results));
  const searchSubmitHandler = () => {
    console.log("Clicked search button, start searching ....");
    const cleanedInput = cleanSearchInput(searchInput);
    if(cleanedInput.length > 0){
      recipeService.searchRecipeByName(cleanedInput)
        .then(results => setSearchResults(results));
    }
    setSearchInput("");
  }

  return(
      <>
      <div className="search-container">
        <div className="searchbar">
        <input
          className="form-control form-control-lg mb-0.5"
          placeholder="Search for recipes"
          value={searchInput}
          onChange={searchInputHandler}
        />

        <button
            className="btn btn-success rounded-pill searchButton"
            onClick={searchSubmitHandler}>
          Search
        </button>
        </div>
        <p className="black-text">Total of {searchResults.length} search results found.</p>

      {
        searchResults.map((searchResult) =>
            <li key={searchResult._id}>
              <SearchItem
                  recipe={searchResult}
              />
            </li>
        )
      }
      </div>
      </>
  )
}

export default RecipeList;
