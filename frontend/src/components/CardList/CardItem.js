import "./card.css";
import { getImageArray } from "../consts";

const CardItem = ({ recipe, isDefault }) => {
  const getTimeDeltaFromNow = (prevDate) => {
    const curDate = new Date();
    const timeDelta = curDate - prevDate;
    const diffDays = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  const targetImage = getImageArray(recipe.Images)[0];

  return (
    <div className="card ms-auto" key={recipe._id}>
      <img className="card-img-top" src={recipe.Images} alt="starred recipe" />
      <div className="card-body">
        <h5 className="card-title">
          {isDefault && recipe.Name}
          {!isDefault && targetImage}
        </h5>
        <p className="card-text text-truncate">{recipe.Description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          {getTimeDeltaFromNow(recipe.DatePublished)} Days Ago
        </small>
      </div>
    </div>
  );
};

export default CardItem;
