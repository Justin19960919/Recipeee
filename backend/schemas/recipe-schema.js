const mongoose = require('mongoose');

const recipe_schema = new mongoose.Schema({
    _id: Number,
    Name: {
        type: String,
        required: [true, 'must provide recipe name'],
        trim: true,
        maxLength: 50
    },
    AuthorId: Number,
    Keywords: {
        type: Array,
        default: []
    }, // originally a string
    DatePublished: Date,
    Description: String,
    Images: String,
    RecipeCategory: String,
    RecipeIngredientQuantities: String,
    RecipeIngredientParts: String,
    AggregatedRating: String,
    ReviewCount: Number,
    Calories: String,
    RecipeInstructions: String,
    LikeNum: {
        type: Number,
        default: 0
    },
    StarNum: {
        type: Number,
        default: 0
    }
}, {collection: "recipes"});

module.exports = recipe_schema;
