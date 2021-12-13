const { like_model } = require("../all_models.js");

// CREATE
module.exports.createNewLike = (like) => like_model.create(like);

module.exports.findAllLikes = () => like_model.find();

module.exports.findLikeById = (likeId) => like_model.findById(likeId);

module.exports.searchLikesByRecipeId = (recipeId) => like_model.find({ RecipeId: recipeId });

module.exports.searchLikesByUsername = (userName) => like_model.find({ Username: userName });

module.exports.searchLikeByRecipeIdAndUserName = (recipeId, userName) => like_model.findOne({ RecipeId: recipeId, Username: userName });


// UPDATE
module.exports.updateLikeInfo = (likeID, like) => {
    console.log(`like id is: ${likeID}, updated like info: ${like}`);
    like_model.updateOne({ _id: likeID }, { $set: like })
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteLike = (likeId) => {
    like_model.deleteOne({ _id: likeId }, (err) => {
        if (err) {
            console.log(err);
            console.log("delete likes failed.");
        } else {
            console.log("delete like succeeded");
        }
    })
}