const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const user_schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide first name'],
        trim: true,
        maxlength: 100
    },
    userName: {
        type: String,
        required: [true, "Please provide user name"],
        trim: true,
        maxLength: 20,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        trim: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
        ]
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Please provide password'],
        minlength: 6,
    },
    type: {
        type: String,
        enum: ['user', 'admin', 'author', 'paiduser'],
        default: "user"
    }
}, { collection: "users" });

user_schema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

user_schema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password)
    return isMatch
}

module.exports = user_schema;
