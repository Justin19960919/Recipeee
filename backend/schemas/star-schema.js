const mongoose = require('mongoose');

const star_schema = new mongoose.Schema({
    // _id: String,
    RecipeId: Number,
    Username: String
}, {collection: "stars"});

module.exports = star_schema;
