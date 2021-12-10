const mongoose = require('mongoose');

const review_schema = new mongoose.Schema({
    RecipeId: Number,
    AuthorId: Number,
    UserId: mongoose.Schema.Types.ObjectId,
    Rating: Number,
    Review: String,
    DateSubmitted: Date,
    DateModified: Date,
}, { collection: "reviews" });

module.exports = review_schema;
