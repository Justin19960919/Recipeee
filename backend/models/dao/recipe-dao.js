//const recipe_model = require('../recipe-model');
const {recipe_model} = require("../all_models.js");

// CREATE
module.exports.createNewRecipe = (recipe) => {
    recipe_model.create(recipe)
        .catch(err => console.log(err));
}

module.exports.findAllRecipes = () => recipe_model.find();

module.exports.findRecipeById = (recipeId) => {
    return recipe_model.findById(recipeId);
}

module.exports.findRecipeByName = (recipeName) => {
    return recipe_model.findOne({Name: recipeName});
}

module.exports.searchRecipesByName = (name) => {
    return recipe_model.find({Name : {$regex : name}});
}

// UPDATE
module.exports.updateRecipeInfo = (recipeID, recipe) => {
    console.log(`recipe id is: ${recipeID}, updated recipe info: ${recipe}`);
    recipe_model.updateOne({_id: recipeID}, {$set: recipe})
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteRecipe = (id) => {
    recipe_model.findByIdAndDelete({_id: id});
}
