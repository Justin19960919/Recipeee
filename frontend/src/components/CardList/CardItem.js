import './card.css';

const CardItem = ({recipe}) => {

    const getTimeDeltaFromNow = (prevDate) => {
        const curDate = new Date();
        const timeDelta = curDate - prevDate;
        const diffDays = Math.floor(timeDelta / (1000 * 60 * 60 * 24)); 
        return diffDays;
    }

    return(
        <div className="card ms-auto">
            <img className="card-img-top" src={recipe.Image} alt="starred recipe"/>
            <div className="card-body">
                <h5 className="card-title">{recipe.Name}</h5>
                <p className="card-text text-truncate">{recipe.Description}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">{getTimeDeltaFromNow(recipe.DatePublished)} Days Ago</small>
            </div>
        </div>
    );
}


export default CardItem;