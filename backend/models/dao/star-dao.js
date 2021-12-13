const { star_model } = require("../all_models.js");

// CREATE
module.exports.createNewStar = (star) => star_model.create(star);

module.exports.findAllStars = () => star_model.find();

module.exports.findStarById = (starId) => star_model.findById(starId);

module.exports.searchStarsByRecipeId = (recipeId) => star_model.find({ RecipeId: recipeId });

module.exports.searchStarsByUsername = (userName) => star_model.find({ Username: userName });


module.exports.searchStarByRecipeIdAndUserName = (recipeId, userName) => star_model.findOne({ RecipeId: recipeId, Username: userName });


// UPDATE
module.exports.updateStarInfo = (starID, star) => {
    console.log(`star id is: ${starID}, updated star info: ${star}`);
    star_model.updateOne({ _id: starID }, { $set: star })
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteStar = (likeId) => {
    star_model.deleteOne({ _id: likeId }, (err) => {
        if (err) {
            console.log(err);
            console.log("delete star failed.");
        } else {
            console.log("delete star succeeded");
        }
    })
}