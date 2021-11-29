const user_dao = require('../models/dao/user-dao');
const {user_model} = require("../models/all_models");


module.exports = (app) => {

    // create
    const createNewUser = (req, res) => {
        const newUser = req.body;
        user_dao.createNewUser(newUser);
        res.sendStatus(200);
    }

    // read
    const findAllUsers = (req, res) => {
        user_dao.findAllUsers()
            .then(users => res.json(users));
    }

    const findUserById = (req, res) => {
        const userId = req.params.id;
        user_dao.findUserById(userId)
            .then(users => res.json(users));
    }


    const findUserByUserName = (req, res) => {
        const userName = req.params.userName;
        user_model.findOne({userName: userName})
            .then(foundUsr => res.status(200).json(foundUsr));
    }

    // update
    const updateUserInfo = (req, res) => {
        const userId = req.params.id;
        const userInfo = req.body;
        user_dao.updateUserInfo(userId, userInfo)
        res.sendStatus(200);
    }

    // delete
    const deleteUser = (req, res) => {
        const userId = req.params.id;
        user_dao.deleteUser(userId);
        res.sendStatus(200);
    }


    /////////// APIS ///////////

    //create
    app.post("/rest/users", createNewUser);

    // read
    app.get('/rest/users', findAllUsers);
    app.get('/rest/users/:id', findUserById);
    app.get('/rest/users/findUser/:userName', findUserByUserName);

    // update
    app.put("/rest/users/:id", updateUserInfo);

    // delete
    app.delete("/rest/users/:id", deleteUser);

};


/*
Alterative ways to construct API

// CREATE
app.post('/newItem', (req, res) => {
  console.log("new item post request is submitted to server..");
  // create new Item, which is the mongoose model
  const newItem = new Item(
    {
      title: req.body.title,
      description: req.body.description
    }
  );
  newItem.save()
    .then(item => console.log(item))
    .catch(err => res.status(400).json("Error " + err));
});


// UPDATE
app.put('/put/:id', (req, res) => {
  const updatedItem = {
    title: req.body.title,
    description: req.body.description
  }

  Item.findByIdAndUpdate({ _id: req.params.id }, { $set: updatedItem }, (req, res, err) => {
    if (!err) {
      console.log("Item updated!");
    } else {
      console.log(err);
    }

// DELETE
// delete route
// axios send request from front end here, and we receive
// :__ is how we receive parameters
app.delete('/delete/:id', (req, res) => {
  // get id
  const id = req.params.id;
  // call back function, and error handling.
  Item.findByIdAndDelete({ _id: id }, (req, res, err) => {
    // error handling
    if (!err) {
      console.log(err);
    }
  });
  console.log("server deleting item");
})





*/