const recipe_model = require('./recipe-model');

const findAllRecipes = () => recipe_model.find();

module.exports = {
    findAllRecipes
};
