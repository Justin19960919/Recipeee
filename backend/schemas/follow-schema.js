const mongoose = require('mongoose');

const follow_schema = new mongoose.Schema({
    Username: String,
    OtherId: mongoose.Schema.Types.ObjectId,
    FollowName: String
}, {collection: "follows"});

module.exports = follow_schema;
