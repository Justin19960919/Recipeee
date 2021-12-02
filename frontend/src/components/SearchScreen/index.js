import React, {useState} from "react";

// import components
import Navigation from "../Navigation";
import RecipeList from "../RecipeList";
import Footer from "../Footer";

// import css
import "./searchScreen.css";



const SearchScreen = () => {

  return(
        <>
          <Navigation/>
          <RecipeList/>
          <Footer/>
        </>
  )
}



export default SearchScreen;

