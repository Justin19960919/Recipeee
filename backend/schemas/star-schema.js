const mongoose = require('mongoose');

const schema = mongoose.Schema({
    RecipeId: String,
    Username: String
}, {collection: "stars"});

module.exports = schema;
