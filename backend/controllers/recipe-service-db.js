const recipe_dao = require('../models/dao/recipe-dao');

module.exports = (app) => {

    const findAllRecipes = (req, res) => {
        recipe_dao.findAllRecipes()
            .then(authors => res.json(authors));
    }
    app.get('/rest/recipes', findAllRecipes);
};