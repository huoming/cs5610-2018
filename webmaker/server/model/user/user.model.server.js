
// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here
var mongoose = require ("mongoose");
var UserSchema = require("./user.schema.server");

var UserModel =  mongoose.model("User", UserSchema); //mongo plurarizes

UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
//UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
//UserModel.findUserByUserName = findUserByUserName;
UserModel.updateUser = updateUser;
UserModel.findFacebookUser=findFacebookUser;
UserModel.deleteUser=deleteUser;

module.exports = UserModel;

function findFacebookUser(id) {
    return UserModel.findOne({"facebook.id": id});
}
function findUserById(userId) {
    return UserModel.findById({_id: userId});
}

function findUserByUsername(username) {
    return UserModel.findOne({username: username});
}

function updateUser(userId, user) {
    //ignore _id
    delete user._id;
    return UserModel
        .update({_id: userId},{
            $set: {firstName : user.firstName,
                lastName : user.lastName,
                email: user.email}}
        );
}

function deleteUser(userId) {
    return UserModel.remove({_id: userId});
}

//findOne returns only One (first one for multiple results)
function findUserByCredentials(username, password) {
    return UserModel.findOne({username: username, password: password});
}

function createUser(user){
    console.log(user);
    return  UserModel.create(user);
}
