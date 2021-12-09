import { useState } from "react";
import { createNewRecipe, updateRecipeInfo, deleteRecipe } from "../../services/recipe-services";

const RecipeForm = ({ addUserRecipe, userId }) => {
  const emptyRecipe = {
    Name: "",
    AuthorId: userId,
    Keywords: [],
    DatePublished: new Date() + "",
    Description: "",
    Images: "",
    RecipeCategory: "",
    RecipeIngredientQuantities: "",
    RecipeIngredientParts: "",
    AggregatedRating: "",
    ReviewCount: 0,
    Calories: "",
    RecipeInstructions: "",
    LikeNum: 0,
    StartNum: 0
  };

  const [newRecipe, setNewRecipe] = useState(emptyRecipe);


  const modifyRecipeHandler = (event) => {
    const changedValue = event.target.value;
    const changedName = event.target.name;

    setNewRecipe((prevState) => {
      switch (changedName) {
        case "Name":
          return {
            ...prevState,
            Name: changedValue
          };
        case "Description":
          return {
            ...prevState,
            Description: changedValue
          };
        case "RecipeCategory":
          return {
            ...prevState,
            RecipeCategory: changedValue
          };
        case "RecipeIngredientQuantities":
          return {
            ...prevState,
            RecipeIngredientQuantities: changedValue
          };
        case "RecipeIngredientParts":
          return {
            ...prevState,
            RecipeIngredientParts: changedValue
          };
        case "Calories":
          return {
            ...prevState,
            Calories: changedValue
          };
        case "RecipeInstructions":
          return {
            ...prevState,
            RecipeInstructions: changedValue
          };
        default:
          return prevState;
      }
    });
  }

  const createRecipeHandler = () => {
    console.log("create new reicipe");
    // createNewRecipe(newRecipe)
    // .then(newRecipe => newRecipe.json())
    // .then
    //
    // // .then(newRecipe => addUserRecipe(prevState => [newRecipe, ...prevState]));

  }

  return (
    <>
      <p>recipe form </p>
      <label>
        Recipe Name
        <input
          type="text"
          placeholder="Recipe Name"
          value={newRecipe.Name}
          name="Name"
          onChange={modifyRecipeHandler}
        />
      </label>

      <br />
      <label>
        Description
        <input
          type="text"
          placeholder="Description"
          value={newRecipe.Description}
          name="Description"
          onChange={modifyRecipeHandler}
        />
      </label>

      <br />
      <label>
        Recipe Category
        <input
          type="text"
          placeholder="Recipe Category"
          value={newRecipe.RecipeCategory}
          name="RecipeCategory"
          onChange={modifyRecipeHandler}
        />
      </label>

      <br />
      <label>
        Recipe Ingredient Quantities
        <textarea
          placeholder="Recipe Ingredient Quantities"
          value={newRecipe.RecipeIngredientQuantities}
          name="RecipeIngredientQuantities"
          onChange={modifyRecipeHandler}
        />
      </label>

      <br />
      <label>
        Recipe Ingredient Parts
        <textarea
          placeholder="Recipe Ingredient Parts"
          value={newRecipe.RecipeIngredientParts}
          name="RecipeIngredientParts"
          onChange={modifyRecipeHandler}
        />
      </label>

      <br />
      <label>
        Calories
        <input
          type="text"
          placeholder="Calories"
          value={newRecipe.Calories}
          name="Calories"
          onChange={modifyRecipeHandler}
        />
      </label>

      <br />
      <label>
        Recipe Instructions
        <textarea
          placeholder="Recipe Instructions"
          value={newRecipe.RecipeInstructions}
          name="RecipeInstructions"
          onChange={modifyRecipeHandler}
        />
      </label>

      <button
        onClick={createRecipeHandler}
      >
        Create
      </button>

    </>
  )
}

export default RecipeForm;