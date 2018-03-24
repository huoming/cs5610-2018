
// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here
var mongoose = require ("mongoose");
var WebsiteSchema = require("./website.schema.server");
var WebsiteModel =  mongoose.model("Website", WebsiteSchema); //mongo plurarizes

var UserModel = require("../user/user.model.server");

WebsiteModel.findAllWebsitesForUser=findAllWebsitesForUser;
WebsiteModel.createWebsiteForUser=createWebsiteForUser;
WebsiteModel.findWebsiteById=findWebsiteById;
WebsiteModel.updateWebsite=updateWebsite;
WebsiteModel.deleteWebsite=deleteWebsite;

module.exports = WebsiteModel;

function deleteWebsite(websiteId) {
    return WebsiteModel.remove({_id: websiteId});
}

function updateWebsite(websiteId, website){
    delete website._id;
    return WebsiteModel
        .update({_id: websiteId},{
            $set: { name : website.name,
                description : website.description
            }}
        );
}


function findAllWebsitesForUser(userId) {
    return WebsiteModel.find({_user: userId});
}


function createWebsiteForUser(userId, website)  {
    website._user = userId;
    return WebsiteModel.create(website);
}

function findWebsiteById(websiteId) {
    return WebsiteModel.findById (websiteId);
}

//refactored version
function createWebsite_new(website)  {
    var newWebsite = null;
    return WebsiteModel
        .create(website)
        .then(function (website) {
            newWebsite = website;
            UserModel
                .findUserById(website.developerId)
                .then(function (user) {
                    user.websites.push(newWebsite);
                });
        });
}

function findWebsiteForUser_new(userId) {
    return WebsiteModel
        .find({developerId: userId})
        .populate('developerId', 'username')
        .exec();
}