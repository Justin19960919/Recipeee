const mongoose = require('mongoose');
const author_schema = require('../schemas/author-schema');
const author_model = mongoose.model('AuthorModel', author_schema);
module.exports = author_model;
