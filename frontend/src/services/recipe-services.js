const recipeServiceAPI = "http://localhost:3001/rest/recipes";


const searchAllRecipes = () =>
  fetch(recipeServiceAPI)
    .then(recipes => recipes.json());


const searchRecipeById = (recipeId) =>
  fetch(`${recipeServiceAPI}/${recipeId}`)
    .then(recipe => recipe.json());

// find recipe by searching for the whole recipe name
const searchRecipeByRecipeName = (recipeName) =>
  fetch(`${recipeServiceAPI}/findRecipe/${recipeName}`)
    .then(recipe => recipe.json());


const searchRecipeByName = (name) =>
  fetch(`${recipeServiceAPI}/searchRecipes/${name}`)
    .then(recipes => recipes.json());


const searchRecipesByKeyWord = (keyword) =>
  fetch(`${recipeServiceAPI}/searchRecipesByKeyword/${keyword}`)
    .then(recipes => recipes.json());



const searchRecipesByAuthorId = (authorId) =>
  fetch(`${recipeServiceAPI}/searchRecipesByAuthor/${authorId}`)
  .then(recipes => recipes.json());



// top likes
const searchTopRecipesByLike = (number) =>
  fetch(`${recipeServiceAPI}/searchTopRecipesByLikes/${number}`)
    .then(recipes => recipes.json());


// top stars
const searchTopRecipesByStar = (number) =>
  fetch(`${recipeServiceAPI}/searchTopRecipesByStars/${number}`)
    .then(recipes => recipes.json());




module.exports = {
  searchAllRecipes,
  searchRecipeById,
  searchRecipeByRecipeName,
  searchRecipeByName,
  searchRecipesByKeyWord,
  searchRecipesByAuthorId,
  searchTopRecipesByLike,
  searchTopRecipesByStar
}





