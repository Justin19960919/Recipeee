const {follow_model} = require("../all_models.js");

// CREATE
module.exports.createNewFollow = (follow) => {
    follow_model.create(follow)
        .catch(err => console.log(err));
}

module.exports.findAllFollows = () => follow_model.find();

module.exports.findFollowById = (followId) => follow_model.findById(followId);

module.exports.findFollowByUsernameFollowName = ({userName, followName}) => follow_model.findOne({Username:userName, FollowName:followName});

module.exports.searchFollowsByUsername = (userName) => follow_model.find({Username : userName});

module.exports.searchFollowsByFollowName = (followName) => follow_model.find({FollowName : followName});

// UPDATE
module.exports.updateFollowInfo = (followID, follow) => {
    console.log(`follow id is: ${followID}, updated follow info: ${follow}`);
    follow_model.updateOne({_id: followID}, {$set: follow})
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteFollow = (id) => {
    follow_model.deleteOne({_id: id});
}