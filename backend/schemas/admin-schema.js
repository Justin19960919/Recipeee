const mongoose = require('mongoose');

const admin_schema = mongoose.Schema({
    Username: String,
    Name: String,
    Password: String,
    Email: String,
    Type: {type: String, defaultValue: 'Admin'}
}, {collection: "admins"});

module.exports = admin_schema;
