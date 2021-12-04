const mongoose = require('mongoose');

const recomm_schema = new mongoose.Schema({
    _id: String,
    RecipeIds: [Number],
    Type: {type: String, defaultValue: 'Default'}
}, {collection: "recommendations"});

module.exports = recomm_schema;
