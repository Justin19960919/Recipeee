import React, {useEffect, useState} from "react";
import SearchItem from "./SearchItem";
import recipeService from "../../services/recipe-services";
import "./index.css";


const RecipeList = () => {

  const recommendedRecipes = [
    {
      Name: "test-Name",
      AuthorId: "test-AuthorId",
      Keywords: ["test1", "test2"],
      DatePublished: "2021-12-1",
      Description: "test",
      ReviewCount: 10
    },
    {
      Name: "test-Name2",
      AuthorId: "test-Author2Id",
      Keywords: ["test12", "test22"],
      DatePublished: "2021-12-1",
      Description: "test2",
      ReviewCount: 20
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
  const searchSubmitHandler = () => {
    console.log("Clicked search button, start searching ....");
    // const cleanedInput = cleanSearchInput(searchInput);
    console.log(recipeService.searchAllRecipes());

    // setSearchInput("");
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
      {
        searchResults.map((searchResult) =>
            <p style={{"color": "black"}}>{JSON.stringify(searchResult)}</p>
            // <li key={searchResult._id}>
            //   <SearchItem
            //       recipe={searchResult}
            //   />
            // </li>
        )
      }
      </div>
      </>
  )
}

export default RecipeList;