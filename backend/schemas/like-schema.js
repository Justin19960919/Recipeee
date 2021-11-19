const mongoose = require('mongoose');

const schema = mongoose.Schema({
    RecipeId: String,
    Username: String
}, {collection: "likes"});

module.exports = schema;
