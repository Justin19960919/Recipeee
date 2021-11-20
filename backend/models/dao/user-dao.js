const {user_model} = require("../all_models.js");

// CREATE
module.exports.createNewUser = (user) => {
    user_model.create(user)
    .catch(err => console.log(err));
}


// READ
module.exports.findAllUsers = () => user_model.find();

module.exports.findUserById = (userId) => {
    return user_model.findById(userId);
}

// UPDATE
module.exports.updateUserInfo = (userID, user) => {
    console.log(`user id is: ${userID}, updated user info: ${user}`);
    user_model.updateOne({_id: userID}, {$set: user})
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteUser = (id) => {
    user_model.findByIdAndDelete({_id: id});
}



