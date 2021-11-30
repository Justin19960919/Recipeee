// recipe reducer

const recipes = (state = [], action) => {
  switch(action.type){
    case "get-all-recipes":
      return action.recipes;
    case "delete-recipe":
      // do sth based on action.recipe
      return;
    case "create-recipe":
      return;
    case "update-recipe":
      // do sth based on action.recipe
      return;
    case "like-recipe":
      return;
    case "comment-recipe":
      return;
    default:
      return state;
  }
}


export default recipes;


