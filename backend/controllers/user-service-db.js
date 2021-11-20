const user_dao = require('../models/user-dao');

module.exports = (app) => {

    const findAllUsers = (req, res) => {
        user_dao.findAllUsers()
            .then(authors => res.json(authors));
    }
    app.get('/rest/users', findAllUsers);
};