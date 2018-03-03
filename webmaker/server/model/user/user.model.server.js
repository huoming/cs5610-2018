
// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here
module.exports = function () {

    var mongoose = require ("mongoose");
    var UserSchema = require("./user.schema.server")();
    var User =  mongoose.model("User", UserSchema); //mongo plurarizes

    var api = {
        findFacebookUser: findFacebookUser,
        createUser: createUser,
        findUserById: findUserById,
        findUserByCredentials: findUserByCredentials,
        deleteUser: deleteUser,
        updateUser: updateUser,
        findUserByUsername: findUserByUsername

    };
    return api;
    //findByID returns just one

    function findFacebookUser(id) {
        return User.findOne({"facebook.id": id});
    }
    function findUserById(userId) {
        return User.findById({_id: userId});
    }

    function findUserByUsername(username) {
        return User.findOne({username: username});
    }

    function updateUser(userId, user) {
        //ignore _id
        delete user._id;
        return User
            .update({_id: userId},{
                $set: {firstName : user.firstName,
                        lastName : user.lastName,
                        email: user.email}}
            );
    }


    function deleteUser(userId) {
        return User.remove({_id: userId});
    }

    //findOne returns only One (first one for multiple results)
    function findUserByCredentials(username, password) {
      console.log("from MONGO")

       return User.findOne({username: username, password: password});

    }

    function createUser(user){
        console.log(user);
        return  User.create(user);
    }

};
