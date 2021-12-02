const recipeServiceAPI = "http://localhost:3001/rest/recipes";


const searchAllRecipes = () => {
  fetch(recipeServiceAPI)
  .then(recipes => recipes.json());
}


const searchRecipeById = (recipeId) => {
  fetch(`${recipeServiceAPI}/${recipeId}`)
  .then(recipe => recipe.json())
}

const searchRecipesByAuthorId = (authorId) => {
  fetch(`${recipeServiceAPI}/author/${authorId}`)
  .then(recipe => recipe.json())
}


const searchRecipeByRecipeName = (recipeName) => {
  fetch(`${recipeServiceAPI}/recipeName/${recipeName}`)
  .then(recipe => recipe.json())
}


const searchRecipesByKeyWord = (keyword) => {
  fetch(`${recipeServiceAPI}/keyword/${keyword}`)
  .then(recipe => recipe.json())
}

// top stars
const searchTopRecipesByStarNumber = () => {
  fetch(`${recipeServiceAPI}/topStars`)
  .then(recipes => recipes.json())
}

// top likes
const searchTopRecipesByLikeNumber = () => {
  fetch(`${recipeServiceAPI}/topLikes`)
  .then(recipes => recipes.json())
}





module.exports = {
  searchAllRecipes,
  searchRecipeById,
  searchRecipeByRecipeName,
  searchRecipesByKeyWord,
  searchRecipesByAuthorId,
  searchTopRecipesByStarNumber,
  searchTopRecipesByLikeNumber
}





