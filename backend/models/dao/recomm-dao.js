const {recomm_model} = require("../all_models.js");

// CREATE
module.exports.createNewRecommendation = (recomm) => {
    recomm_model.create(recomm)
        .catch(err => console.log(err));
}

module.exports.findAllRecommendations = () => recomm_model.find();

module.exports.findRecommendationById = (recommId) => recomm_model.findById(recommId);

module.exports.searchRecommendationByType = (type) => recomm_model.findOne({Type : type});

// UPDATE
module.exports.updateRecommendationInfo = (recommID, recomm) => {
    console.log(`recomm id is: ${recommID}, updated recomm info: ${recomm}`);
    recomm_model.updateOne({_id: recommID}, {$set: recomm})
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteRecommendation = (id) => {
    recomm_model.findByIdAndDelete({_id: id});
}