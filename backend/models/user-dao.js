const user_model = require('./user-model');

const findAllUsers = () => user_model.find();

module.exports = {
    findAllUsers
};
