const recomm_dao = require('../models/dao/recomm-dao');

module.exports = (app) => {

    // create
    const createNewRecommendation = (req, res) => {
        const newRecommendation = req.body;
        recomm_dao.createNewRecommendation(newRecommendation);
        res.sendStatus(200);
    }

    // read
    const findAllRecommendations = (req, res) => {
        recomm_dao.findAllRecommendations()
            .then(recomms =>
                res.json(recomms)
            );
    }

    const findRecommendationById = (req, res) => {
        const recommId = req.params.id;
        recomm_dao.findRecommendationById(recommId)
            .then(recomm => res.json(recomm));
    }

    const searchRecommendationByType = (req, res) => {
        const type = req.params.type;
        console.log('type: ', type);
        recomm_dao.searchRecommendationByType(type)
            .then(recomm => res.status(200).json(recomm));
    }

    // update
    const updateRecommendationInfo = (req, res) => {
        const recommId = req.params.id;
        const recommInfo = req.body;
        recomm_dao.updateRecommendationInfo(recommId, recommInfo)
        res.sendStatus(200);
    }

    // delete
    const deleteRecommendation = (req, res) => {
        const recommId = req.params.id;
        recomm_dao.deleteRecommendation(recommId);
        res.sendStatus(200);
    }


    /////////// APIS ///////////

    //create
    app.post("/rest/recomms", createNewRecommendation);

    // read
    app.get('/rest/recomms', findAllRecommendations);
    app.get('/rest/recomms/:id', findRecommendationById);
    app.get('/rest/recomms/searchRecommendationByRecipeId/:type', searchRecommendationByType);

    // update
    app.put("/rest/recomms/:id", updateRecommendationInfo);

    // delete
    app.delete("/rest/recomms/:id", deleteRecommendation);
};