const model = require('./author-model');

const findAllAuthors = () => model.find();

module.exports = {
    findAllAuthors
};
