const mongoose = require('mongoose');

const recomm_schema = new mongoose.Schema({
    _id: String,
    RecipeIds: [String],
    Type: {type: String, defaultValue: 'Default'}
}, {collection: "recommendations"});

module.exports = recomm_schema;
