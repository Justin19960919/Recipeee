const mongoose = require('mongoose');

// TODO: remove this part
const admin_schema = new mongoose.Schema({
    // _id: String,
    Username: String,
    Name: String,
    Password: String,
    Email: String,
    Type: {type: String, defaultValue: 'Admin'}
}, {collection: "admins"});

module.exports = admin_schema;
