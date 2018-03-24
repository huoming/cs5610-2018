
// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here
var mongoose = require ("mongoose");
var UserSchema = require("./user.schema.server");

var UserModel =  mongoose.model("User", UserSchema); //mongo plurarizes

UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.findFacebookUser=findFacebookUser;
UserModel.deleteUser=deleteUser;

//helper functions -- delete after testing
UserModel.findAllUsers = function (){
    return UserModel.find();
}

module.exports = UserModel;

function findFacebookUser(id) {
    return UserModel.findOne({"facebook.id": id});
}
function findUserById(userId) {
    return UserModel.findById({_id: userId});
}

function findUserByUsername(username) {
    var user = null;
    UserModel
         .findOne({username: username})
         .then(function (result) {
            console.log(result);
            user = result;
         });
    return user;
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
