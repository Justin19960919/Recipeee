const review_dao = require('../models/dao/review-dao');

module.exports = (app) => {

    // create
    const createNewReview = (req, res) => {
        const newReview = req.body;
        // console.log(`backend got new review: ${JSON.stringify(newReview)}`);
        review_dao.createNewReview(newReview)
            .then(createdReview => res.json(createdReview))
            .catch(err => console.log(`Error: ${err} occurred!`));

    }

    // read
    const findAllReviews = (req, res) => {
        review_dao.findAllReviews()
            .then(reviews =>
                res.json(reviews)
            );
    }

    const findReviewById = (req, res) => {
        const reviewId = req.params.id;
        review_dao.findReviewById(reviewId)
            .then(review => res.json(review));
    }

    // const searchReviewsByAuthorId = (req, res) => {
    //     const authorId = req.params.authorId;
    //     console.log('authorid: ', authorId);
    //     review_dao.searchReviewsByAuthorId(authorId)
    //         .then(reviews => res.status(200).json(reviews));
    // }

    const searchReviewsByRecipeId = (req, res) => {
        const recipeId = req.params.recipeId;
        review_dao.searchReviewsByRecipeId(recipeId)
            .then(reviews => res.status(200).json(reviews));
    }

    const searchReviewsByRating = (req, res) => {
        const rating = req.params.rating;
        // console.log("rating: ", rating);
        review_dao.searchReviewsByRating(rating)
            .then(reviews => res.status(200).json(reviews));
    }

    // update
    const updateReviewInfo = (req, res) => {
        const reviewId = req.params.id;
        const reviewInfo = req.body;
        review_dao.updateReviewInfo(reviewId, reviewInfo)
        res.sendStatus(200);
    }

    // delete
    const deleteReview = (req, res) => {
        const reviewId = req.params.id;
        // console.log("got delete request to delete the review of id: " + reviewId);
        review_dao.deleteReview(reviewId);
        res.sendStatus(200);
    }


    /////////// APIS ///////////

    //create
    app.post("/rest/reviews", createNewReview);

    // read
    app.get('/rest/reviews', findAllReviews);
    app.get('/rest/reviews/:id', findReviewById);
    // app.get('/rest/reviews/searchReviewsByAuthorId/:authorId', searchReviewsByAuthorId);
    app.get('/rest/reviews/searchReviewsByRecipeId/:recipeId', searchReviewsByRecipeId);
    app.get('/rest/reviews/searchReviewsByRating/:rating', searchReviewsByRating);

    // update
    app.put("/rest/reviews/:id", updateReviewInfo);

    // delete
    app.delete("/rest/reviews/:id", deleteReview);
};