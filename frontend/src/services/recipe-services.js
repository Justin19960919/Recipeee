import { backendUrl } from "./backendUrl";
const recipeServiceAPI = `${backendUrl}/rest/recipes`;



export const searchAllRecipes = () =>
  fetch(recipeServiceAPI)
    .then(recipes => recipes.json());


export const searchRecipeById = (recipeId) =>
  fetch(`${recipeServiceAPI}/${recipeId}`)
    .then(recipe => recipe.json()
    );

// find recipe by searching for the whole recipe name
export const searchRecipeByRecipeName = (recipeName) =>
  fetch(`${recipeServiceAPI}/findRecipe/${recipeName}`)
    .then(recipe => recipe.json());


export const searchRecipeByName = (name) =>
  fetch(`${recipeServiceAPI}/searchRecipes/${name}`)
    .then(recipes => recipes.json());


export const searchRecipesByKeyWord = (keyword) =>
  fetch(`${recipeServiceAPI}/searchRecipesByKeyword/${keyword}`)
    .then(recipes => recipes.json());



export const searchRecipesByAuthorId = (authorId) =>
  fetch(`${recipeServiceAPI}/searchRecipesByAuthor/${authorId}`)
    .then(recipes => recipes.json());



// top likes
export const searchTopRecipesByLike = (number) =>
  fetch(`${recipeServiceAPI}/searchTopRecipesByLikes/${number}`)
    .then(recipes => recipes.json());


// top stars
export const searchTopRecipesByStar = (number) =>
  fetch(`${recipeServiceAPI}/searchTopRecipesByStars/${number}`)
    .then(recipes => recipes.json());


export const createNewRecipe = (newRecipe) => {
  fetch(`${recipeServiceAPI}/recipes`, {
    method: "POST",
    body: JSON.stringify(newRecipe),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());
}

export const updateRecipeInfo = (updatedRecipe) => {
  fetch(`${recipeServiceAPI}/recipes/${updatedRecipe._id}`, {
    method: "PUT",
    body: JSON.stringify(updatedRecipe),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());
}

export const deleteRecipe = (id) =>
  fetch(`${recipeServiceAPI}/recipes/${id}`,
    {
      method: "DELETE"
    });

// module.exports = {
//   createNewRecipe,
//   updateRecipeInfo,
//   deleteRecipe,
//   searchAllRecipes,
//   searchRecipeById,
//   searchRecipeByRecipeName,
//   searchRecipeByName,
//   searchRecipesByKeyWord,
//   searchRecipesByAuthorId,
//   searchTopRecipesByLike,
//   searchTopRecipesByStar
// }