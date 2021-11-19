const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Name: String,
    AuthorId: String,
    Keywords: String,
    DatePublished: String,
    Description: String,
    Images: String,
    RecipeCategory: String,
    RecipeIngredientQuantities: String,
    RecipeIngredientParts: String,
    AggregatedRating: String,
    ReviewCount: String,
    Calories: String,
    RecipeInstructions: String,
    LikeNum: Number,
    StarNum: Number,
}, {collection: "recipes"});

module.exports = schema;
