const mongoose = require('mongoose');

const like_schema = new mongoose.Schema({
    RecipeId: String,
    Username: String
}, {collection: "likes"});

module.exports = like_schema;
