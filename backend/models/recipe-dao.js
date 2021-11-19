const model = require('./recipe-model');

const findAllRecipes = () => model.find();

module.exports = {
    findAllRecipes
};
