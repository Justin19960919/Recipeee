const mongoose = require('mongoose');

const star_schema = mongoose.Schema({
    RecipeId: String,
    Username: String
}, {collection: "stars"});

module.exports = star_schema;
