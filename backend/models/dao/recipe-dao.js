//const recipe_model = require('../recipe-model');
const { recipe_model } = require("../all_models.js");

// CREATE
module.exports.createNewRecipe = (recipe) => {
    recipe_model.create(recipe);
}

module.exports.findAllRecipes = () => recipe_model.find();

module.exports.findRecipeById = (recipeId) => {
    return recipe_model.findById(recipeId);
}

module.exports.findRecipeByName = (recipeName) => {
    return recipe_model.findOne({ Name: recipeName });
}

module.exports.searchRecipesByName = (name) => {
    return recipe_model.find({ Name: { $regex: new RegExp(name, "i") } });
}

module.exports.searchRecipesByKeyword = (keyword) => {
    return recipe_model.find({ Keywords: { $all: [keyword] } });
}

module.exports.searchRecipesByAuthorId = (authorId) => {
    return recipe_model.find({ AuthorId: authorId });
}

module.exports.searchTopRecipesByLike = (number) => {
    return recipe_model.find().sort({ LikeNum: 1 }).limit(number);
}

module.exports.searchTopRecipesByStar = (number) => {
    return recipe_model.find().sort({ StarNum: 1 }).limit(number);
}

// UPDATE
module.exports.updateRecipeInfo = (recipeID, recipe) => {
    console.log(`recipe id is: ${recipeID}, updated recipe info: ${recipe}`);
    recipe_model.updateOne({ _id: recipeID }, { $set: recipe })
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteRecipe = (id) => {
    recipe_model.findByIdAndDelete({ _id: id });
}
