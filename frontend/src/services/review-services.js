//const reviewServiceAPI = "http://localhost:3001/rest/reviews";
import { backendUrl } from "./backendUrl";
const reviewServiceAPI = `${backendUrl}/rest/reviews`;


// create
export const createNewReview = (newReview) =>
  fetch(`${reviewServiceAPI}`, {
    method: "POST",
    body: JSON.stringify(newReview),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());


// read
export const findReviewById = (reviewId) =>
  fetch(`${reviewServiceAPI}/${reviewId}`)
    .then(review => review.json());


export const searchReviewsByAuthorId = (authorId) =>
  fetch(`${reviewServiceAPI}/searchReviewsByAuthorId/${authorId}`)
    .then(reviews => reviews.json());


export const searchReviewsByRecipeId = (recipeId) =>
  fetch(`${reviewServiceAPI}/searchReviewsByRecipeId/${recipeId}`)
    .then(reviews => reviews.json());


export const searchReviewsByRating = (rating) =>
  fetch(`${reviewServiceAPI}/searchReviewsByRating/${rating}`)
    .then(reviews => reviews.json());

// update
export const updateReview = (reviewId, newReview) => {
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
export const deleteReview = (reviewId) => {
  fetch(`${reviewServiceAPI}/${reviewId}`, {
    method: "DELETE",
  })
}

// module.exports = {
//   createNewReview,
//   findReviewById,
//   searchReviewsByAuthorId,
//   searchReviewsByRecipeId,
//   searchReviewsByRating,
//   updateReview,
//   deleteReview
// }