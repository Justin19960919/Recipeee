const dao = require('../models/author-dao');

module.exports = (app) => {

    const findAllAuthors = (req, res) => {
        dao.findAllAuthors()
            .then(authors => res.json(authors));
    }
    app.get('/rest/authors', findAllAuthors);
};