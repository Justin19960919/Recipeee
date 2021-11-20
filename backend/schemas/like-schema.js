const mongoose = require('mongoose');

const like_schema = mongoose.Schema({
    RecipeId: String,
    Username: String
}, {collection: "likes"});

module.exports = like_schema;
