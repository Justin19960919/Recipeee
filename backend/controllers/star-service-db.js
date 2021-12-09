const star_dao = require('../models/dao/star-dao');

module.exports = (app) => {

    // create
    const createNewStar = (req, res) => {
        const newStar = req.body;
        star_dao.createNewStar(newStar);
        res.sendStatus(200);
    }

    // read
    const findAllStars = (req, res) => {
        star_dao.findAllStars()
            .then(stars =>
                res.json(stars)
            );
    }

    const findStarById = (req, res) => {
        const starId = req.params.id;
        star_dao.findStarById(starId)
            .then(star => res.json(star));
    }

    const searchStarsByRecipeId = (req, res) => {
        const recipeId = req.params.recipeId;
        console.log('recipeId: ', recipeId);
        star_dao.searchStarsByRecipeId(recipeId)
            .then(stars => res.status(200).json(stars));
    }
    const searchStarsByUsername = (req, res) => {
        const userName = req.params.userName;
        console.log('userName: ', userName);
        star_dao.searchStarsByUsername(userName)
            .then(stars => res.status(200).json(stars));
    }

    // update
    const updateStarInfo = (req, res) => {
        const starId = req.params.id;
        const starInfo = req.body;
        star_dao.updateStarInfo(starId, starInfo)
        res.sendStatus(200);
    }

    // delete
    const deleteStar = (req, res) => {
        const starId = req.params.id;
        star_dao.deleteStar(starId);
        res.sendStatus(200);
    }


    /////////// APIS ///////////

    //create
    app.post("/rest/stars", createNewStar);

    // read
    app.get('/rest/stars', findAllStars);
    app.get('/rest/stars/:id', findStarById);
    app.get('/rest/stars/searchStarsByRecipeId/:recipeId', searchStarsByRecipeId);
    app.get('/rest/stars/searchStarsByAuthorId/:userName', searchStarsByUsername);

    // update
    app.put("/rest/stars/:id", updateStarInfo);

    // delete
    app.delete("/rest/stars/:id", deleteStar);
};