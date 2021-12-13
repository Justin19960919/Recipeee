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
      Name: "Brunch",
      Description: "A delightful brunch that took only half an hour to make, delicious..",
      DatePublished: "2020-03-27T00:00:00.000Z",
      Images: '/pic/brunch.jpg'
    },
    {
      _id: 1,
      Name: "King Crab",
      Description: "Best seafood I've ever had in years! :)",
      DatePublished: "2021-09-19T00:00:00.000Z",
      Images: '/pic/kingcrab.jpg'
    },
    {
      _id: 2,
      Name: "Pancakes",
      Description: "Pancakes with syrup and jam is heaven on earth, melts on my tongue 😀",
      DatePublished: "2021-01-02T00:00:00.000Z",
      Images: '/pic/pancakes.jpg'
    },
    {
      _id: 3,
      Name: "Salad",
      Description: "Easy salad to have when working out or not having foood coma",
      DatePublished: "2020-01-20T00:00:00.000Z",
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
  // query from backend database for starred recipes
  // perform logic to see if length >= 4
  const populateStarredRecipes = () => {
    if (user !== null) {
      getUserStars(user.userName)
        .then(
          userStarredRecipes => {
            if (userStarredRecipes.length >= 4) {
              setStarredRecipes([]);
              const cutOff = userStarredRecipes.slice(0, 4);
              cutOff.forEach((item) => {
                searchRecipeById(item.RecipeId)
                  .then((recipe) => {
                    setStarredRecipes(prevState => [recipe, ...prevState])
                  })
              });
              setIsDefault(false);
            }
          }
        );
    }
  }

  useEffect(getProfile, []);
  useEffect(populateStarredRecipes, [user]);
  // console.log(`starred recipes length: ${starredRecipes.length}, isDefault: ${isDefault}`)
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
