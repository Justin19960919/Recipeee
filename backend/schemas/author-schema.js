const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Name: String,
    Type: {type: String, defaultValue: 'Author'}
}, {collection: "authors"});

module.exports = schema;
