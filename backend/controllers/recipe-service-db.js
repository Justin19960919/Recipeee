const recipe_dao = require('../models/dao/recipe-dao');
const {recipe_model} = require("../models/all_models");

module.exports = (app) => {

    // create
    const createNewRecipe = (req, res) => {
        const newRecipe = req.body;
        recipe_dao.createNewRecipe(newRecipe);
        res.sendStatus(200);
    }

    // read
    const findAllRecipes = (req, res) => {
        recipe_dao.findAllRecipes()
            .then(recipes =>
               res.json(recipes)
            );
    }

    const findRecipeById = (req, res) => {
        const recipeId = req.params.id;
        recipe_dao.findRecipeById(recipeId)
            .then(recipe => res.json(recipe));
    }


    const findRecipeByRecipeName = (req, res) => {
        const recipeName = req.params.recipeName;
        recipe_dao.findRecipeByName(recipeName)
            .then(recipe => res.status(200).json(recipe));
    }

    //
    const searchRecipesByName = (req, res) => {
        const recipeName = req.params.recipeName;
        recipe_dao.searchRecipesByName(recipeName)
            .then(recipes => {
                res.status(200).json(recipes)
                }
            );

    }

    const searchRecipesByKeyword = (req, res) => {
        const keyword = req.params.keyword;
        recipe_dao.searchRecipesByKeyword(keyword)
            .then(recipes => res.status(200).json(recipes));
    }
    const searchRecipesByAuthorId = (req, res) => {
        const authorId = req.params.authorId;
        recipe_dao.searchRecipesByAuthorId(authorId)
            .then(recipes => res.status(200).json(recipes));
    }
    const searchTopRecipesByLike = (req, res) => {
        const number = req.params.number;
        recipe_dao.searchTopRecipesByLike(number)
            .then(recipes => res.status(200).json(recipes));
    }
    const searchTopRecipesByStar = (req, res) => {
        const number = req.params.number;
        recipe_dao.searchTopRecipesByStar(number)
            .then(recipes => res.status(200).json(recipes));
    }

    // update
    const updateRecipeInfo = (req, res) => {
        const recipeId = req.params.id;
        const recipeInfo = req.body;
        recipe_dao.updateRecipeInfo(recipeId, recipeInfo)
        res.sendStatus(200);
    }

    // delete
    const deleteRecipe = (req, res) => {
        const recipeId = req.params.id;
        recipe_dao.deleteRecipe(recipeId);
        res.sendStatus(200);
    }


    /////////// APIS ///////////

    //create
    app.post("/api/recipes", createNewRecipe);

    // read
    app.get('/api/recipes', findAllRecipes);
    app.get('/api/recipes/:id', findRecipeById);
    app.get('/api/recipes/findRecipe/:recipeName', findRecipeByRecipeName);
    app.get('/api/recipes/searchRecipes/:recipeName', searchRecipesByName);
    app.get('/api/recipes/searchRecipesByKeyword/:keyword', searchRecipesByKeyword);
    app.get('/api/recipes/searchRecipesByAuthor/:authorId', searchRecipesByAuthorId);
    app.get('/api/recipes/searchTopRecipesByLikes/:number', searchTopRecipesByLike);
    app.get('/api/recipes/searchTopRecipesByStars/:number', searchTopRecipesByStar);

    // update
    app.put("/api/recipes/:id", updateRecipeInfo);

    // delete
    app.delete("/api/recipes/:id", deleteRecipe);
};