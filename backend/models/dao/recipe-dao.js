//const recipe_model = require('../recipe-model');
const {recipe_model} = require("../all_models.js");


const findAllRecipes = () => recipe_model.find();

module.exports = {
    findAllRecipes
};
