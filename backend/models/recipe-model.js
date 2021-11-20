const mongoose = require('mongoose');
const recipe_schema = require('../schemas/recipe-schema');
const recipe_model = mongoose.model('RecipeModel', recipe_schema);
module.exports = recipe_model;