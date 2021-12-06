import React, {useState} from "react";

// import components
import Navigation from "../Navigation";
import RecipeList from "../RecipeList";
import Footer from "../Footer";

// import css
import "./index.css";



const RecipeSearchScreen = () => {

  return(
        <>
          <Navigation/>
          <RecipeList/>
          <Footer/>
        </>
  )
}



export default RecipeSearchScreen;

