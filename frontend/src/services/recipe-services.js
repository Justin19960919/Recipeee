import { backendUrl } from "./backendUrl";
const recipeServiceAPI = `${backendUrl}/rest/recipes`;
const likeServiceAPI = `${backendUrl}/rest/likes`;
const starServiceAPI = `${backendUrl}/rest/stars`;


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


// export const createNewRecipe = (newRecipe) => {
//   fetch(`${recipeServiceAPI}/recipes`, {
//     method: "POST",
//     body: JSON.stringify(newRecipe),
//     headers: {
//       "content-type": "application/json"
//     }
//   }).then(response => response.json());
// }

// export const updateRecipeInfo = (updatedRecipe) => {
//   fetch(`${recipeServiceAPI}/recipes/${updatedRecipe._id}`, {
//     method: "PUT",
//     body: JSON.stringify(updatedRecipe),
//     headers: {
//       "content-type": "application/json"
//     }
//   }).then(response => response.json());
// }


export const deleteRecipe = (id) =>
  fetch(`${recipeServiceAPI}/recipes/${id}`,
    {
      method: "DELETE"
    });

///////// check if star exists /////////
export const checkStarExists = (userName, recipeId) =>
  fetch(`${starServiceAPI}/searchStarByRecipeIdAndUserName/${userName}/${recipeId}`);


///////// check if like exists /////////
export const checkLikeExists = (userName, recipeId) =>
  fetch(`${likeServiceAPI}/searchLikeByRecipeIdAndUserName/${userName}/${recipeId}`);




////////// like a recipe  //////////
export const likeRecipe = (newLike) =>
  fetch(`${likeServiceAPI}`, {
    method: "POST",
    body: JSON.stringify(newLike),
    headers: {
      "content-type": "application/json"
    }
  });


export const unLikeRecipe = (likeId) => {
  fetch(`${likeServiceAPI}/${likeId}`, {
    method: "DELETE"
  });
}



export const updateRecipeLikes = (updatedRecipe) => {
  console.log(likeServiceAPI);
  fetch(likeServiceAPI, {
    method: "POST",
    body: JSON.stringify(updatedRecipe),
    headers: {
      "content-type": "application/json"
    }
  });
}


////////// star a recipe  //////////
export const starRecipe = (newStar) =>
  fetch(starServiceAPI, {
    method: "POST",
    body: JSON.stringify(newStar),
    headers: {
      "content-type": "application/json"
    }
  })


export const unStarRecipe = (starId) => {
  fetch(`${starServiceAPI}/${starId}`, {
    method: "DELETE"
  });
}

export const updateRecipeStars = (updatedRecipe) => {
  fetch(`${starServiceAPI}`, {
    method: "POST",
    body: JSON.stringify(updatedRecipe),
    headers: {
      "content-type": "application/json"
    }
  });
}
