
// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here
module.exports = function () {

    var mongoose = require ("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var Website =  mongoose.model("Website", WebsiteSchema); //mongo plurarizes

    var models = require("../models.server")();
    var userModel = models.userModel;

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

    //refactored version
    function createWebsite(website)  {
        var newWebsite = null;
        return Website
            .create(website)
            .then(function (website) {
                newWebsite = website;
                userModel
                    .findUserById(website.developerId)
                    .then(function (user) {
                        user.websites.push(newWebsite);
                    });
            });
    }

    function findWebsiteForUser_new(userId) {
        return Website
            .find({developerId: userId})
            .populate('developerId', 'username')
            .exec();
    }
};