const like_dao = require('../models/dao/like-dao');

module.exports = (app) => {

    // create
    const createNewLike = (req, res) => {
        const newLike = req.body;
        like_dao.createNewLike(newLike)
            .then(newLike => res.status(200).json(newLike))
            .catch(err => console.log(err));
    }

    // read
    const findAllLikes = (req, res) => {
        like_dao.findAllLikes()
            .then(likes =>
                res.json(likes)
            );
    }

    const findLikeById = (req, res) => {
        const likeId = req.params.id;
        like_dao.findLikeById(likeId)
            .then(like => res.json(like));
    }

    const searchLikesByRecipeId = (req, res) => {
        const recipeId = req.params.recipeId;
        console.log('recipeId: ', recipeId);
        like_dao.searchLikesByRecipeId(recipeId)
            .then(likes => res.status(200).json(likes));
    }

    // call and display on profile page
    const searchLikesByUsername = (req, res) => {
        const userName = req.params.userName;
        console.log('userName: ', userName);
        like_dao.searchLikesByUsername(userName)
            .then(likes => res.status(200).json(likes));
    }
    // search if likes exist by recipe id and username
    // return null if doesn't exists
    const searchLikeByRecipeIdAndUserName = (req, res) => {
        console.log("backend is calling search like by recipeId and username");
        const userName = req.params.userName;
        const recipeId = req.params.recipeId;
        like_dao.searchLikeByRecipeIdAndUserName(recipeId, userName)
            .then(like => res.json(like));
    }



    // update
    const updateLikeInfo = (req, res) => {
        const likeId = req.params.id;
        const likeInfo = req.body;
        like_dao.updateLikeInfo(likeId, likeInfo)
        res.sendStatus(200);
    }

    // delete
    const deleteLike = (req, res) => {
        const likeId = req.params.id;
        like_dao.deleteLike(likeId);
        res.sendStatus(200);
    }


    /////////// APIS ///////////

    //create
    app.post("/rest/likes", createNewLike);

    // read
    app.get('/rest/likes', findAllLikes);
    app.get('/rest/likes/:id', findLikeById);
    app.get('/rest/likes/searchLikesByRecipeId/:recipeId', searchLikesByRecipeId);
    app.get('/rest/likes/searchLikesByAuthorId/:userName', searchLikesByUsername);
    app.get('/rest/likes/searchLikeByRecipeIdAndUserName/:userName/:recipeId', searchLikeByRecipeIdAndUserName);
    // update
    app.put("/rest/likes/:id", updateLikeInfo);

    // delete
    app.delete("/rest/likes/:id", deleteLike);
};