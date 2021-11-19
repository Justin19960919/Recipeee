const mongoose = require('mongoose');

const schema = mongoose.Schema({
    RecipeId: String,
    AuthorId: String,
    Rating: String,
    Review: String,
    DateSubmitted: Date,
    DateModified: Date,
}, {collection: "reviews"});

module.exports = schema;
