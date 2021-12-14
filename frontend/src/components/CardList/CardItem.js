import { Link } from "react-router-dom";
import './card.css';
import { getImageArray, parseStringToDate, getTimeDeltaFromNow } from '../consts';

const CardItem = ({ recipe, isDefault }) => {
  const img = getImageArray(recipe.Images)[0];
  const notGood = [undefined, null, ""];
  const showDefault = notGood.includes(img);
  console.log(`front end should render image: ${img}`);
  console.log(`show default? ${showDefault}`);

  return (
    <div className="card ms-auto" key={recipe._id}>
      <img
        className="card-img-top"
        src={
          (isDefault && recipe.Images) ||
          (!isDefault && !showDefault && img) ||
          (!isDefault && showDefault && "/pic/invalidPhoto.jpg")
        }
        alt="Star Recipe"

      />
      <div className="card-body">
        <h5 className="card-title">

          {isDefault && recipe.Name}
          {!isDefault &&
            <Link to={`/recipe-detail/${recipe._id}`}>
              {recipe.Name}
            </Link>
          }
        </h5>
        <p className="card-text text-truncate">
          {recipe.Description}
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{
          recipe.DatePublished &&
          getTimeDeltaFromNow(
            parseStringToDate(recipe.DatePublished)
          )
        }
          Days Ago
        </small>
      </div>
    </div>
  );
}


export default CardItem;
