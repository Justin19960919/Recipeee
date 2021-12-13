import React, {useState} from "react";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const RecipeDetail = ({ recipeDetail }) => {
  const listout = (details) => {
    if (details === undefined) {
      return [];
    }
    let data = details.substring(3, details.length - 2);
    data = data.split('", "');
    return data;
  }

  const print1 = (list1, list2) => {
    if (list1 === undefined || list2 === undefined) {
      return [];
    }
    list1 = listout(list1);
    list2 = listout(list2);
    let lists = list1.map(function (value, index) {
      return (
        <li>
          {value} :<span>{list2[index]}</span>
        </li>
      );
    });
    return lists;
  }

  const print2 = (list1) => {
    if (list1 === undefined) {
      return [];
    }
    list1 = listout(list1);
    let lists = list1.map(function (value) {
      return <li>{value}</li>;
    });
    return lists;
  }

  const formatDate = (datee) => {
    if (datee === undefined) {
      return "";
    }

    let dateee = datee + "";
    return dateee.substr(0, 10);
  };

  const getImageArray = (imageString) => {
    if (imageString === undefined) {
      return [];
    }

    if (imageString.startsWith("c")) {
      let stripC = imageString.substr(3);
      let stripCArr = stripC.split(".jpg");
      let stringArr = stripCArr.map((url) => {
        if (url.startsWith(`", `)) {
          let stripHead = url.substr(4);
          return stripHead + ".jpg";
        } else {
          return url + ".jpg";
        }
      });

      let last = stringArr[stringArr.length - 1];
      stringArr[stringArr.length - 1] = last.substr(0, last.length - 3);
      return stringArr.slice(0, stringArr.length - 1);
    } else {
      return [imageString.substring(1, imageString.length - 1)];
    }
  };

  const imgs = getImageArray(recipeDetail.Images);
  const [fill1, setFilled1] = useState(false);
  const [fill2, setFilled2] = useState(false);

  const generateStar = (num) => {
    if (num == undefined) {
      // null check
      return <p>No Stars</p>;
    }
    let iterateArr = [...Array(Math.floor(num)).keys()];
    let isHalf = Number.isInteger(num);
    return (
      <div className="star">
        {iterateArr.map((item) => (
          <i class="fa fa-star" />
        ))}
        {isHalf ? "" : <i className="fa fa-star-half" />}
      </div>
    );
  };
 
  const recommendedRecipes = [
    {
      Image: "/pic/risotto.jpg",
      Label: "Risotto",
      Active: "active"
    },
    {
      Image: "/pic/salmon.jpg",
      Label: "Salmon",
      Active: ""
    },
    {
      Image: "/pic/steak.jpg",
      Label: "Steak",
      Active: ""
    },
    {
      Image: "/pic/veggies.jpg",
      Label: "Veggies",
      Active: ""
    },
  ];
  
  return (
    <div className="recipe-detail">
      <div className="author-container">
        <div className="author-detail">
          <h2 className="author-detail-title">{recipeDetail.Name}</h2>

          <p className="category">
            {recipeDetail.RecipeCategory}/{recipeDetail.Keywords}
          </p>

          <h6>{formatDate(recipeDetail.DatePublished)}</h6>

          <h6>Author: {recipeDetail.AuthorId}</h6>

          <div className="summary-detail">
            <p className="summary-detail-conponent edge">
              <span className="summary-detail-conponent-number">
                {recipeDetail.RecipeIngredientParts !== undefined &&
                  recipeDetail.RecipeIngredientParts.length}
              </span>
              <span>Ingredients</span>
            </p>
            <p className="summary-detail-conponent border-side">
              <span className="summary-detail-conponent-number">
                {recipeDetail.Calories}
              </span>
              <span>Calories</span>
            </p>
            <div class="justify-content-center">
              <div class="content text-center">
                <div class="ratings">
                  <span class="product-rating">
                    {recipeDetail.AggregatedRating}
                  </span>
                  <span>/5</span>
                  <div class="stars">
                    {generateStar(recipeDetail.AggregatedRating)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="icon">
            <button 
              className="btn" 
              onClick={() => {
                const newFill1 = fill1 === true? false: true;
                setFilled1(newFill1);
                }
              }
            >
              <span 
                className={`bi bi-hand-thumbs-up-fill ${fill1 && "fill" || !fill1 && ""}`} >
              </span>
            </button>
            <button 
              className="btn" 
              onClick={() => {
                // console.log("make button fill");
                const newFill2 = fill2 === true? false: true;
                setFilled2(newFill2);
                }
              }
            >
              <span className={`bi bi-bookmark-fill ${fill2 && "fill" || !fill2 && ""}`}></span>
            </button>
          </div>
        </div>

        <div className="img-container">
          <div id="carouselExampleCaptions" className="carousel slide base recipe-detail-carousel" data-bs-ride="carousel">
            <div className="carousel-inner">
              {recommendedRecipes.map(recipe =>
                  <div className={`carousel-item ${recipe.Active}`} key={recipe._id}>
                    <img src={recipe.Image} className="d-block mx-auto slides recipedetail-img" alt="recommended recipe" />
                  </div>
                )}
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon icon" ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon icon" ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* {console.log(imgs)}
          {recipeDetail.Images !== undefined && (
            <img
              // src={recipeDetail.Images.substring(1, recipeDetail.Images.length - 1)}
              src={imgs[0]}
              className="recipedetail-img"
              alt="img"
            />
          )} */}
        </div>
      </div>

      {/* <p>Reviews: {recipeDetail.ReviewCount}</p> */}
      <div className="recipeDetail-content-container">
        <div className="desctription-container">
          <h4>Description</h4>
          <p>{recipeDetail.Description}</p>
        </div>
        <div className="ingredient-container">
          <h4>Ingredient</h4>
          <ul>
            {print1(
              recipeDetail.RecipeIngredientParts,
              recipeDetail.RecipeIngredientQuantities
            )}
          </ul>
        </div>
        <div className="instructions-container">
          <h4>Instructions</h4>
          <ul>{print2(recipeDetail.RecipeInstructions)}</ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
