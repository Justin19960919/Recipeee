const mongoose = require('mongoose');
const schema = require('../schemas/author-schema');
const model = mongoose.model('AuthorModel', schema);
module.exports = model;
