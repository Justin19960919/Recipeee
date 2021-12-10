const follow_dao = require('../models/dao/follow-dao');

module.exports = (app) => {

    // create
    const createNewFollow = (req, res) => {
        const newFollow = req.body;
        follow_dao.createNewFollow(newFollow);
        res.sendStatus(200);
    }

    // read
    const findAllFollows = (req, res) => {
        follow_dao.findAllFollows()
            .then(follows =>
                res.json(follows)
            );
    }

    const findFollowById = (req, res) => {
        const followId = req.params.id;
        follow_dao.findFollowById(followId)
            .then(follow => res.json(follow));
    }

    const searchFollowsByUsername = (req, res) => {
        const userName = req.params.userName;
        console.log('userName: ', userName);
        follow_dao.searchFollowsByUsername(userName)
            .then(follows => res.status(200).json(follows));
    }

    const searchFollowsByFollowName = (req, res) => {
        const followName = req.params.followName;
        follow_dao.searchFollowsByFollowName(followName)
            .then(follows => res.status(200).json(follows));
    }

    // update
    const updateFollowInfo = (req, res) => {
        const followId = req.params.id;
        const followInfo = req.body;
        follow_dao.updateFollowInfo(followId, followInfo)
        res.sendStatus(200);
    }

    // delete
    const deleteFollow = (req, res) => {
        const followId = req.params.id;
        follow_dao.deleteFollow(followId);
        res.sendStatus(200);
    }


    /////////// APIS ///////////

    //create
    app.post("/rest/follows", createNewFollow);

    // read
    app.get('/rest/follows', findAllFollows);
    app.get('/rest/follows/:id', findFollowById);
    app.get('/rest/follows/searchFollowsByAuthorId/:userName', searchFollowsByUsername);
    app.get('/rest/follows/searchFollowsByRecipeId/:followName', searchFollowsByFollowName);

    // update
    app.put("/rest/follows/:id", updateFollowInfo);

    // delete
    app.delete("/rest/follows/:id", deleteFollow);
};