const mongoose = require('mongoose');

const review_schema = new mongoose.Schema({
    // _id: Number,
    RecipeId: Number,
    // AuthorId: Number,
    UserId: String,
    Rating: Number,
    Review: String,
    DateSubmitted: Date,
    DateModified: Date,
}, {collection: "reviews"});

module.exports = review_schema;