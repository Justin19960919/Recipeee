// slideshow for top recipes
import "./recipeslideshow.css";

const RecipeSlideShow = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide base" data-bs-ride="carousel">
      {/* <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active test" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> */}
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="./pic/4.jpg" className="d-block w-50 h-10rem mx-auto slides" alt="..."/>
          <div className="carousel-caption d-none d-md-block car-container">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./pic/2.jpg" className="d-block w-50 mx-auto h-10 slides" alt="..."/>
          <div className="carousel-caption d-none d-md-block car-container">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./pic/3.jpg" className="d-block w-50 mx-auto h-10 slides" alt="..."/>
          <div className="carousel-caption d-none d-md-block car-container">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>

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



