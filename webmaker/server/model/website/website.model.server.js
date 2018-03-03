
// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here
module.exports = function () {

    var mongoose = require ("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var Website =  mongoose.model("Website", WebsiteSchema); //mongo plurarizes
    
    var api = {
        findAllWebsitesForUser: findAllWebsitesForUser,
        createWebsiteForUser: createWebsiteForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite : updateWebsite,
        deleteWebsite: deleteWebsite
    };
    return api;


    function deleteWebsite(websiteId) {
        return Website.remove({_id: websiteId});
    }
    
    function updateWebsite(websiteId, website){
        delete website._id;
        return Website
            .update({_id: websiteId},{
                $set: { name : website.name,
                        description : website.description
                    }}
            );    
    }
    
    
    function findAllWebsitesForUser(userId) {
        return Website.find({_user: userId});
    }


    function createWebsiteForUser(userId, website)  {
        website._user = userId;
        return Website.create(website);
    }

    function findWebsiteById(websiteId) {
        return Website.findById (websiteId);
    }






















    //
    // function findUserById(userId) {
    //     return User.findById({_id: userId});
    // }
    //
    // function findUserByUsername(username) {
    //     return User.findById({username: username});
    // }
    //
    // function updateUser(userId, user) {
    //     //ignore _id
    //     delete user._id;
    //     return User
    //         .update({_id: userId},{
    //             $set: {firstName : user.firstName,
    //                     lastName : user.lastName,
    //                     email: user.email}}
    //         );
    // }
    //
    //
    // function deleteUser(userId) {
    //     return User.remove({_id: userId});
    // }
    //
    // //findOne returns only One (first one for multiple results)
    // function findUserByCredentials(username, password) {
    //     return User.findOne({username: username, password: password});
    // }
    //
    // function createUser(user){
    //    console.log("user.model.server.createUser()");
    //     console.log(user);
    //     return  User.create(user);
    // }
    
};