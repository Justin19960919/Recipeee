//const author_model = require('../author-model');
const {author_model} = require("../all_models.js");

const findAllAuthors = () => author_model.find();

module.exports = {
    findAllAuthors
};
