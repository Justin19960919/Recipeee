import "./review.css";

const Review = () => {

    const reviews = [
        {
            Image: "url",
            position: "left",
        }
    ]



    return (
        <div className="review">
            <div className="container first">
                <img className="review-image" src="/pic/lasagnia.jpeg" alt="food" />
                <div className="comment-container">
                    <h4 className="review-title">Mexican Lasagna</h4>
                    <p className="comment text-truncate">"Here's what one recipe reviewer had to say: "My husband and I love, love, love this recipe! We make it for just us to eat throughout the week! Thank you!"</p>
                    <h6 className="author-name">Giovanni</h6>
                </div>

            </div>
            <div className="container second">
                <div className="comment-container">
                    <h4 className="review-title">Lemon Yogurt Cake</h4>
                    <p className="comment text-truncate">"This cake was fabulous — very moist with wonderful and not overwhelming lemon flavor. I also love how easy and quick it is to make, plus nearly everyone will have these ingredients on hand."</p>
                    <h6 className="author-name">Stefano</h6>
                </div>
                <img className="review-image" src="/pic/poundcake.jpeg" alt="food" />
            </div>
            <div className="container third">
                <img className="review-image" src="/pic/chicken.jpeg" alt="food" />
                <div className="comment-container">
                    <h4 className="review-title">Roman-Style Chicken</h4>
                    <p className="comment text-truncate">"This is really great! I keep trying to find new recipes for chicken — this one is definitely five-star."</p>
                    <h6 className="author-name">----- Alessandro</h6>
                </div>
            </div>
        </div>

    )
}
export default Review;