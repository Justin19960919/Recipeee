import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";

import SearchItem from "./SearchItem";
import recipeService from "../../services/recipe-services";
import "./index.css";
import RecipeDetail from "../RecipeDetail";


const RecipeList = () => {

  const params = useParams();
  const history = useHistory();
  const [searchResults, setSearchResults] = useState([]);
  const defaultSearch = params.searchInput || "Dessert";
  const [searchInput, setSearchInput] = useState(defaultSearch);

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  }

  const cleanSearchInput = (input) => {
    return input.trim();
  }

  // search submit handler
  const searchSubmitHandler = () => {
    const cleanedInput = cleanSearchInput(searchInput);
    if(cleanedInput.length > 0){
      history.push(`/recipe-search/${searchInput}`);
      recipeService.searchRecipeByName(cleanedInput)
        .then(results => setSearchResults(results));
    }
  }

  // render once, when we first get into the page
  useEffect(searchSubmitHandler, []);

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

        {console.log(searchResults)}
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
