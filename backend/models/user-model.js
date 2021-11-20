const mongoose = require('mongoose');
const user_schema = require('../schemas/user-schema');
const user_model = mongoose.model('UserModel', user_schema);
module.exports = user_model;