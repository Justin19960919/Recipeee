import React from "react";
import "./index.css";


const RecipeDetail = ({ recipeDetail }) => {

  function listout(details) {
    let data = details.substring(3, details.length - 2)
    data = data.split('", "')
    return data
  }
  function print1(list1, list2) {
    list1 = listout(list1)
    list2 = listout(list2)
    let lists = list1.map(function (value, index) {
      return <li>{value} :<span>{list2[index]}</span></li>;
    })
    return lists
  }
  function print2(list1) {
    list1 = listout(list1)
    let lists = list1.map(function (value) {
      return <li>{value}</li>;
    })
    return lists
  }

  const formatDate = (date) => {
    return date !== null ? date.substr(0, 10) : "";
  }

  const getImageArray = (imageString) => {
    if (imageString.startsWith("c")) {
      let stripC = imageString.substr(3);
      console.log(stripC);
      let stripCArr = stripC.split('" ,');
      console.log(stripCArr);
      let stringArr = stripCArr.map(url => url + `"`);
      let last = stringArr[stringArr.length - 1];
      stringArr[stringArr.length - 1] = last.substr(0, last.length - 3);
      return stringArr;
    } else {
      return imageString;
    }
  }


  return (

    <div className="recipe-detail">
      <div className="author-container">
        <div className="author-detail">
          <h2 className="author-detail-title">{recipeDetail.Name}</h2>
          <p className="category">{recipeDetail.RecipeCategory}/{recipeDetail.Keywords}</p>
          <h6>{formatDate(recipeDetail.DatePublished)}</h6>
          <h6>Author: {recipeDetail.AuthorId}</h6>
          <div className="summary-detail">
            <p className="summary-detail-conponent edge"><span className="summary-detail-conponent-number">{recipeDetail.RecipeIngredientParts.length}</span><span>Ingredients</span></p>
            <p className="summary-detail-conponent border-side"><span className="summary-detail-conponent-number">{recipeDetail.Calories}</span><span>Calories</span></p>
            <div class="justify-content-center">
              <div class="content text-center">
                <div class="ratings"> <span class="product-rating">{recipeDetail.AggregatedRating}</span><span>/5</span>
                  <div class="stars"> <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img
            src={recipeDetail.Images.substring(1, recipeDetail.Images.length - 1)}
            className="recipedetail-img"
          />
        </div>
      </div>

      {/* <p>Reviews: {recipeDetail.ReviewCount}</p> */}
      <div className="recipeDetail-content-container">
        <div className="desctription-container">
          <h4>Description</h4><p>{recipeDetail.Description}</p>
        </div>
        <div className="ingredient-container">
          <h4>Ingredient</h4>
          <ul>
            {print1(recipeDetail.RecipeIngredientParts, recipeDetail.RecipeIngredientQuantities)}
          </ul>
        </div>
        <div className="instructions-container">
          <h4>Instructions</h4>
          <ul>
            {print2(recipeDetail.RecipeInstructions)}
          </ul>
        </div>
      </div>
    </div>


  );
}

export default RecipeDetail;
