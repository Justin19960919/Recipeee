const mongoose = require('mongoose');

const star_schema = new mongoose.Schema({
    _id: String,
    RecipeId: String,
    Username: String
}, {collection: "stars"});

module.exports = star_schema;
