const reviewServiceAPI = "http://localhost:3001/rest/reviews";


// read
const findReviewById = (reviewId) =>
    fetch(`${reviewServiceAPI}/${reviewId}`)
    .then(review => review.json());


const searchReviewsByAuthorId = (authorId) =>
    fetch(`${reviewServiceAPI}/searchReviewsByAuthorId/${authorId}`)
    .then(reviews => reviews.json());


const searchReviewsByRecipeId = (recipeId) =>
    fetch(`${reviewServiceAPI}/searchReviewsByRecipeId/${recipeId}`)
    .then(reviews => reviews.json());


const searchReviewsByRating = (rating) =>   
    fetch(`${reviewServiceAPI}/searchReviewsByRating/${rating}`)
    .then(reviews => reviews.json());

// update
const updateReview = (reviewId, newReview) => {
  fetch(`${reviewServiceAPI}/${reviewId}`, {
    method: "PUT",
    body: JSON.stringify(newReview),
    headers: {
      "content-type": "application/json"
    }
  })
  .then(reviews => reviews.json());
}

// delete
const deleteReview = (reviewId, newReview) => {
  fetch(`${reviewServiceAPI}/${reviewId}`, {
    method: "DELETE",
  })
}

module.exports = {
  findReviewById,
  searchReviewsByAuthorId,
  searchReviewsByRecipeId,
  searchReviewsByRating,
  updateReview,
  deleteReview
}





