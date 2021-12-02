const recipeServiceAPI = "http://localhost:3001/rest/recipes";


export const getAllRecipes = (dispatch) => {
  console.log("getting all recipes...")
  fetch(recipeServiceAPI)
  .then(response => response.json())
  .then(recipes => dispatch({
    type: "get-all-recipes",
    recipes
  }))
}

// need to add new recipe to redux state via local
export const createNewRecipe = (dispatch, newRecipe) => {
  console.log("creating new recipe...");
  fetch(recipeServiceAPI, {
    method: "POST",
    body: JSON.stringify(newRecipe),
    headers: {
      "content-type": "application/json"
    }
  })
    .catch(err => console.log(err))
    .then(newRecipe => dispatch({
      type: "create-recipe",
      newRecipe
    }))
}

export const deleteRecipe = (dispatch, recipe) => {
  console.log("deleting recipe based on id..");
  fetch(`${recipeServiceAPI}/${recipe._id}`,{
    method: "DELETE",
  })
  .then(status => {
    console.log(`Status : ${status}`);
    dispatch({
      type: "delete-recipe",
      recipe
    })
  })
}

export const updateRecipe = (dispatch, recipe) => {
  console.log("udpating recipe based on id..");
  fetch(`${recipeServiceAPI}/${recipe._id}`,{
    method: "PUT",
  })
  .then(status => {
    console.log(`Status : ${status}`);
    dispatch({
      type: "update-recipe",
      recipe
    })
  })
}


export const likeRecipe = (dispatch, recipe) => {
  console.log("liking recipe ... ");
  fetch(`${recipeServiceAPI}/like/${recipe._id}`,{
    method: "PUT",
  })
  .then(status => {
    console.log(`Status : ${status}`);
    dispatch({
      type: "like-recipe",
      recipe
    })
  })
}


export const commentOnRecipe = (dispatch, recipe) => {
  console.log("comment on recipe ...");
  fetch(`${recipeServiceAPI}/like/${recipe._id}`,{
    method: "PUT",
  })
  .then(status => {
    console.log(`Status : ${status}`);
    dispatch({
      type: "comment-recipe",
      recipe
    })
  })
}


// Need to identlfy various ways to query a specifc recipe
// export const searchRecipeBasedOnName = () => {}



