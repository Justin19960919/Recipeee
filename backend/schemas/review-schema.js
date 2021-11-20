const mongoose = require('mongoose');

const review_schema = mongoose.Schema({
    RecipeId: String,
    AuthorId: String,
    Rating: String,
    Review: String,
    DateSubmitted: Date,
    DateModified: Date,
}, {collection: "reviews"});

module.exports = review_schema;
