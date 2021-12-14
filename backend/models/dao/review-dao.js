const { review_model } = require("../all_models.js");

// CREATE
module.exports.createNewReview = (review) => {
    return review_model.create(review);
}

module.exports.findAllReviews = () => review_model.find();

module.exports.findReviewById = (reviewId) => {
    return review_model.findById(reviewId);
}

module.exports.searchReviewsByAuthorId = (authorId) => {
    return review_model.find({ AuthorId: authorId });
}

module.exports.searchReviewsByRecipeId = (recipeId) => {
    return review_model.find({ RecipeId: recipeId });
}

module.exports.searchReviewsByRating = (rating) => {
    return review_model.find({ Rating: rating });
}

// UPDATE
module.exports.updateReviewInfo = (reviewID, review) => {
    console.log(`review id is: ${reviewID}, updated review info: ${review}`);
    review_model.updateOne({ _id: reviewID }, { $set: review })
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteReview = (id) => {
    review_model.deleteOne({ _id: id })
        .then(status => console.log(status));
}