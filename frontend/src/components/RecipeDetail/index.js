// Detail screen
import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import RecipeDetail from "./RecipeDetail";

import RecipeDetailSample from "./dummy";


const DetailScreen = () => {
  return(
    <>
      <Navigation/>
      {/*<RecipeDetail/>*/}
      <RecipeDetailSample/>
      <Footer/>
    </>
  );
}

export default DetailScreen;
