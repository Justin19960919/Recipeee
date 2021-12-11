// slideshow for top recipes
import "./recipeslideshow.css";

const RecipeSlideShow = () => {

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
    <div id="carouselExampleCaptions" className="carousel slide base" data-bs-ride="carousel">

      <div className="carousel-inner">
        {
          recommendedRecipes.map(recipe =>
            <div className={`carousel-item ${recipe.Active}`} key={recipe._id}>
              <img src={recipe.Image} className="d-block w-50 h-10rem mx-auto slides" alt="recommended recipe" />
              <div className="carousel-caption d-none d-md-block car-container">
                <h5 className="white-layer">{recipe.Label}</h5>
              </div>
            </div>
          )
        }
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default RecipeSlideShow;



