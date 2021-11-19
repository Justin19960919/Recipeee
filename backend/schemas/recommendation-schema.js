const mongoose = require('mongoose');

const schema = mongoose.Schema({
    RecipeIds: [String],
    Type: {type: String, defaultValue: 'Default'}
}, {collection: "recommendations"});

module.exports = schema;
