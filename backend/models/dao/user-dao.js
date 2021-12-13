const { user_model } = require("../all_models.js");

// CREATE
module.exports.createNewUser = (user) =>
    user_model.create(user);


// READ
module.exports.findAllUsers = () => user_model.find();

module.exports.findUserById = (userId) => {
    return user_model.findById(userId);
}

// UPDATE
module.exports.updateUserInfo = (userID, user) => {
    console.log(`user id is: ${userID}, updated user info: ${user}`);
    return user_model.updateOne({ _id: userID }, { $set: user })
        .catch(err => console.log(err));
}


// DELETE
module.exports.deleteUser = (id) => {
    console.log("dao deleting user..");
    return user_model.findByIdAndDelete(id, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("sucessful deletion of user");
    });
}

module.exports.findByUsernameAndPassword = ({ userName, password }) =>
    user_model.findOne({ userName, password });


module.exports.findByUsername = ({ userName }) =>
    user_model.findOne({ userName });
