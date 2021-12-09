import { useEffect, useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import RecipeItem from "../RecipeList/RecipeItem";
import RecipeForm from "./RecipeForm";

import recipeService from "../../services/recipe-services";

const UserRecipeScreen = () => {
  const [userRecipes, setUserRecipes] = useState([]);

  const testUserId = 1538;
  const fetchAllUserRecipes = () => {
    recipeService.searchRecipesByAuthorId(testUserId)
      .then(response => setUserRecipes(response))
  }
  useEffect(fetchAllUserRecipes, []);

  return (
    <>
      <Navigation />
      <RecipeForm
        addUserRecipe={setUserRecipes}
        userId={testUserId}
      />
      {
        userRecipes.map(userRecipe =>
          <RecipeItem recipe={userRecipe} key={userRecipe._id}/>
        )
      }
      <Footer />
    </>
  )
}

export default UserRecipeScreen;