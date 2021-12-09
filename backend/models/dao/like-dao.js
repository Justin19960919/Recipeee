const {like_model} = require("../all_models.js");

// CREATE
module.exports.createNewLike = (like) => {
    like_model.create(like)
        .catch(err => console.log(err));
}

module.exports.findAllLikes = () => like_model.find();

module.exports.findLikeById = (likeId) => like_model.findById(likeId);

module.exports.searchLikesByRecipeId = (recipeId) => like_model.find({RecipeId : recipeId});

module.exports.searchLikesByUsername = (userName) => like_model.find({Username : userName});

// UPDATE
module.exports.updateLikeInfo = (likeID, like) => {
    console.log(`like id is: ${likeID}, updated like info: ${like}`);
    like_model.updateOne({_id: likeID}, {$set: like})
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteLike = (id) => {
    like_model.findByIdAndDelete({_id: id});
}