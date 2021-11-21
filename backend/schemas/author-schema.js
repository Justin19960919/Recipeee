const mongoose = require('mongoose');

const author_schema = new mongoose.Schema({
    Name: String,
    Type: {type: String, defaultValue: 'Author'}
}, {collection: "authors"});

module.exports = author_schema;
