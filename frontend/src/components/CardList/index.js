import React, { useState } from "react";
import "./card.css";
import CardItem from "./CardItem";


const CardList = () => {
    const defaultRecipes = [
        {
            Name: "Recipe 1",
            Description: "Test recipe 1",
            DatePublished: new Date(),
            Image: '/pic/brunch.jpg'
        },
        {
            Name: "Recipe2",
            Description: "Test recipe 2",
            DatePublished: new Date(),
            Image: '/pic/kingcrab.jpg'
        },
        {
            Name: "Recipe 3",
            Description: "Test recipe 3",
            DatePublished: new Date(),
            Image: '/pic/pancakes.jpg'
        },
        {
            Name: "Recipe 4",
            Description: "Test recipe 4",
            DatePublished: new Date(),
            Image: '/pic/salad.jpg'
        },
    ];
    const [starredRecipes, setStarredRecipes] = useState(defaultRecipes);

    // query from backend database for starred recipes
    //
    //
    // perform logic to see if length >= 4


    return (
        <div className="card-deck">
            {
                starredRecipes.map(recipe =>
                    <CardItem recipe={recipe} />
                )
            }
        </div>
    )
}
export default CardList;