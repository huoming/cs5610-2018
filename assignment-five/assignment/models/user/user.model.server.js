var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");

var UserModel = mongoose.model("UserModel", UserSchema);


//UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
/*UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUserName = findUserByUserName;
UserModel.updateUser = updateUser;*/

module.exports = UserModel;

function createUser(user){
  return UserModel.create(user);
}


function updateUser(userId, user){
  return UserModel.update({_id: userId}, user );
}

function findUserByUserName(username){
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}



function findAllUsers(){
  UserModel.find(function (err, doc) {
    console.log(docs);
  })
}

function findUserById(userId){
  return UserModel.findById(userId);
}
