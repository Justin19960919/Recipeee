import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import RecipeItem from "./RecipeItem";
import recipeService from "../../services/recipe-services";
import "./index.css";


// https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwirm4uuw870AhXxIDQIHSsMCeoQFnoECAUQAQ&url=https%3A%2F%2Fdev.to%2Fraaynaldo%2Freact-router-usehistory-uselocation-and-useparams-10cd&usg=AOvVaw1ay7P92t_mL1Sizt4Sz0zx
const RecipeList = () => {

  const params = useParams();
  const history = useHistory();
  const [searchResults, setSearchResults] = useState([]);
  const defaultSearch = params.searchInput === " " ? "Dessert" : params.searchInput;
  const [searchInput, setSearchInput] = useState(defaultSearch);

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  }

  const cleanSearchInput = (input) => {
    return input.trim();
  }

  // search submit handler
  const searchSubmitHandler = () => {
    const cleanedInput = cleanSearchInput(searchInput);
    if (cleanedInput.length > 0) {
      history.push(`/recipe-search/${searchInput}`, { fromPopup: true });
      recipeService.searchRecipeByName(cleanedInput)
        .then(results => setSearchResults(results));
    }
  }

  // render once, when we first get into the page
  useEffect(searchSubmitHandler, []);

  return (
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
              <RecipeItem
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
