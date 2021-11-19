const dao = require('../models/recipe-dao');

module.exports = (app) => {

    const findAllRecipes = (req, res) => {
        dao.findAllRecipes()
            .then(authors => res.json(authors));
    }
    app.get('/rest/recipes', findAllRecipes);
};