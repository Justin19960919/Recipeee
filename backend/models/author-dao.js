const author_model = require('./author-model');

const findAllAuthors = () => author_model.find();

module.exports = {
    findAllAuthors
};
