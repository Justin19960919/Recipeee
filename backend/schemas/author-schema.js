const mongoose = require('mongoose');

// TODO: remove this part
const author_schema = new mongoose.Schema({
    _id: Number,
    Name: String,
    Type: {type: String, defaultValue: 'Author'}
}, {collection: "authors"});

module.exports = author_schema;
