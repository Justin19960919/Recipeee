const mongoose = require('mongoose');

const review_schema = new mongoose.Schema({
    RecipeId: String,
    AuthorId: String,
    Rating: Number,
    Review: String,
    DateSubmitted: Date,
    DateModified: Date,
}, {collection: "reviews"});

module.exports = review_schema;
