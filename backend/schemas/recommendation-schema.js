const mongoose = require('mongoose');

const recomm_schema = mongoose.Schema({
    RecipeIds: [String],
    Type: {type: String, defaultValue: 'Default'}
}, {collection: "recommendations"});

module.exports = recomm_schema;
