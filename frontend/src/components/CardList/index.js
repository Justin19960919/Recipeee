import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { getUserStars } from "../../services/ProfileService";
import { getUserProfile } from "../../services/user-services";
import { searchRecipeById } from "../../services/recipe-services";

import "./card.css";


const CardList = () => {
    const defaultRecipes = [
        {
            _id: 0,
            Name: "Recipe 1",
            Description: "Test recipe 1",
            DatePublished: new Date(),
            Images: '/pic/brunch.jpg'
        },
        {
            _id: 1,
            Name: "Recipe2",
            Description: "Test recipe 2",
            DatePublished: new Date(),
            Images: '/pic/kingcrab.jpg'
        },
        {
            _id: 2,
            Name: "Recipe 3",
            Description: "Test recipe 3",
            DatePublished: new Date(),
            Images: '/pic/pancakes.jpg'
        },
        {
            _id: 3,
            Name: "Recipe 4",
            Description: "Test recipe 4",
            DatePublished: new Date(),
            Images: '/pic/salad.jpg'
        },
    ];
    const [starredRecipes, setStarredRecipes] = useState(defaultRecipes);
    const [user, setUser] = useState({});
    const [isDefault, setIsDefault] = useState(true);

    // check if user logged in
    const getProfile = () => {
        getUserProfile().then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(() => {
                setUser(null);
            });
    }
    useEffect(getProfile, []);

    // query from backend database for starred recipes
    // perform logic to see if length >= 4
    if (user !== null) {
        console.log(`front end has detected user to be: ${user}`);
        getUserStars(user.userName)
            .then(
                userStarredRecipes => {
                    if (userStarredRecipes.length >= 4) {
                        const cutOff = userStarredRecipes.slice(0, 4);
                        console.log(`Cut off starred recipes: ${JSON.stringify(cutOff)}`);
                        const cutOffRecipes = cutOff.map(
                            (item) => {
                                return searchRecipeById(item.RecipeId)
                                    .then(recipe => recipe);
                            });
                        console.log(`Cut off recipes: ${JSON.stringify(cutOffRecipes)}`)
                        // setStarredRecipes(cutOff);
                        // setIsDefault(false);
                    }
                }
            );
    }


    return (
        <div className="card-deck">
            {
                starredRecipes.map(recipe =>
                    <CardItem
                        recipe={recipe}
                        isDefault={isDefault}
                    />
                )
            }
        </div>
    )
}
export default CardList;