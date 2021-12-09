const mongoose = require('mongoose');


// import schemas
const recipe_schema = require('../schemas/recipe-schema');
const author_schema = require('../schemas/author-schema');
const user_schema = require('../schemas/user-schema');
const review_schema = require('../schemas/review-schema');
const follow_schema = require('../schemas/follow-schema');
const like_schema = require('../schemas/like-schema');
const star_schema = require('../schemas/star-schema');


// define models
const recipe_model = mongoose.model('RecipeModel', recipe_schema);
const author_model = mongoose.model('AuthorModel', author_schema);
const user_model = mongoose.model('UserModel', user_schema);
const review_model = mongoose.model('ReviewModel', review_schema);
const follow_model = mongoose.model('FollowModel', follow_schema);
const like_model = mongoose.model('LikeModel', like_schema);
const star_model = mongoose.model('StarModel', star_schema);



module.exports = {
  recipe_model,
  author_model,
  user_model,
  review_model,
  follow_model,
  like_model,
  star_model
}


