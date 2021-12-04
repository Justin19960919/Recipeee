const mongoose = require('mongoose');

const author_schema = new mongoose.Schema({
    _id: String,
    Name: String,
    Type: {type: String, defaultValue: 'Author'}
}, {collection: "authors"});

module.exports = author_schema;
