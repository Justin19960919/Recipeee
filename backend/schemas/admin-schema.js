const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Username: String,
    Name: String,
    Password: String,
    Email: String,
    Type: {type: String, defaultValue: 'Admin'}
}, {collection: "admins"});

module.exports = schema;
