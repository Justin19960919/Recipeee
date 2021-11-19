const dao = require('../models/user-dao');

module.exports = (app) => {

    const findAllUsers = (req, res) => {
        dao.findAllUsers()
            .then(authors => res.json(authors));
    }
    app.get('/rest/users', findAllUsers);
};