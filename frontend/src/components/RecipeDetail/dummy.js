import "./index.css";

const RecipeDetailSample = () => {
  const review1 = {
    "_id" : 177583,
    "RecipeId" : 42,
    "AuthorId" : 151591,
    "AuthorName" : "Annie M.",
    "Rating" : 2,
    "Review" : "Too bland 1",
    "DateSubmitted" : "2005-05-29T22:58:29Z",
    "DateModified" : "2005-05-29T22:58:29Z"
  }
  const review2 = {
    "_id" : 177584,
    "RecipeId" : 43,
    "AuthorId" : 151592,
    "AuthorName" : "ABC.",
    "Rating" : 1,
    "Review" : "Too bland 2",
    "DateSubmitted" : "2005-05-29T22:58:29Z",
    "DateModified" : "2005-05-29T22:58:29Z"
  }

  const recipeReviews = [review1, review2];

  const recipeDetail = {
    "_id" : 42,
    "Name" : "Cabbage Soup",
    "AuthorId" : 1538,
    "AuthorName" : "Duckie067",
    "DatePublished" : "1999-09-19T06:19:00Z",
    "Description" : "Make and share this Cabbage Soup recipe from Food.com.",
    "Images" : "\"https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/42/picVEMxk8.jpg\"",
    "RecipeCategory" : "Vegetable",
    "RecipeIngredientQuantities" : "c(\"46\", \"4\", \"1\", \"2\", \"1\")",
    "RecipeIngredientParts" : "c(\"plain tomato juice\", \"cabbage\", \"onion\", \"carrots\", \"celery\")",
    "AggregatedRating" : 4.5,
    "ReviewCount" : 11,
    "Calories" : 103.6,
    "RecipeInstructions" : "c(\"Mix everything together and bring to a boil.\", \"Reduce heat and simmer for 30 minutes (longer if you prefer your veggies to be soft).\", \"Refrigerate until cool.\", \"Serve chilled with sour cream.\")"
  }


  return(
      <div>
        <p>{recipeDetail.AuthorId}</p>
        <p>{recipeDetail.Keywords}</p>
        <p>{recipeDetail.DatePublished}</p>
        <p>{recipeDetail.Description}</p>
        <p>{recipeDetail.Images}</p>
        <p>{recipeDetail.RecipeCategory}</p>
        <p>{recipeDetail.RecipeIngredientQuantities}</p>
        <p>{recipeDetail.RecipeIngredientParts}</p>
        <p>{recipeDetail.AggregatedRating}</p>
        <p>{recipeDetail.ReviewCount}</p>
        <p>{recipeDetail.Calories}</p>
        <p>{recipeDetail.RecipeInstructions}</p>
        <p>{recipeDetail.LikeNum}</p>
        <p>{recipeDetail.StarNum}</p>

        <input
            className="form-control form-control-lg mb-0.5"
            placeholder="Leave a comment"
        />

        <button>Submit</button>

        {
          recipeReviews.map(review =>
              <div>
                <p>{review.AuthorId}</p>
                <p>{review.UserId}</p>
                <p>{review.Rating}</p>
                <p>{review.Review}</p>
                <p>{review.DateSubmitted}</p>
                <p>{review.DateModified}</p>
                <button>Edit</button>
                <button>Delete</button>
              </div>
          )
        }
      </div>
  );
}

export default RecipeDetailSample;
