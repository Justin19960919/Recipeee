const {star_model} = require("../all_models.js");

// CREATE
module.exports.createNewStar = (star) => {
    star_model.create(star)
        .catch(err => console.log(err));
}

module.exports.findAllStars = () => star_model.find();

module.exports.findStarById = (starId) => star_model.findById(starId);

module.exports.searchStarsByRecipeId = (recipeId) => star_model.find({RecipeId : recipeId});

module.exports.searchStarsByUsername = (userName) => star_model.find({Username : userName});

// UPDATE
module.exports.updateStarInfo = (starID, star) => {
    console.log(`star id is: ${starID}, updated star info: ${star}`);
    star_model.updateOne({_id: starID}, {$set: star})
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteStar = (id) => {
    star_model.findByIdAndDelete({_id: id});
}