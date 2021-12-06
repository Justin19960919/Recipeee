const RecipeReview = ({ review }) => {
  return (
    <div>
      <p>{review._id}</p>
      <p>{review.AuthorId}</p>
      <p>{review.UserId}</p>
      <p>{review.Rating}</p>
      <p>{review.Review}</p>
      <p>{review.DateSubmitted}</p>
      <p>{review.DateModified}</p>
    </div>
  )

}

export default RecipeReview;