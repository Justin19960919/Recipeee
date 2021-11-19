const mongoose = require('mongoose');
const schema = require('../schemas/recipe-schema');
const model = mongoose.model('RecipeModel', schema);
module.exports = model;