
// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here
module.exports = function () {

    var mongoose = require ("mongoose");
    var PageSchema = require("./page.schema.server")();
    var Page =  mongoose.model("Page", PageSchema); //mongo plurarizes
    
    var api = {
        findAllPagesForWebsite: findAllPagesForWebsite,
        createPage: createPage,
        updatePage: updatePage,
        findPageById: findPageById,
        deletePage: deletePage
    };
    return api;

    function findAllPagesForWebsite(websiteId) {
        return Page.find({_website: websiteId});
    }

    function createPage(websiteId, page) {
            page._website= websiteId;
            return Page.create(page);

    }

    function updatePage(pageId, page) {
        delete page._id;
        return Page
            .update({_id: pageId}, {
                    $set: {
                        name: page.name,
                        title: page.title
                    }
                }
            );
    }

    function findPageById(pageId) {
        return Page.findById (pageId);
    }

    function deletePage(pageId) {
        return Page.remove({_id: pageId});
    }
    // function deleteWebsite(websiteId) {
    //     return Website.remove({_id: websiteId});
    // }
    //
    // function updateWebsite(websiteId, website){
    //     delete website._id;
    //     return Website
    //         .update({_id: websiteId},{
    //             $set: { name : website.name,
    //                     description : website.description
    //                 }}
    //         );    
    // }
    //
    //
    // function findAllWebsitesForUser(userId) {
    //     return Website.find({_user: userId});
    // }
    //
    //
    // function createWebsiteForUser(userId, website)  {
    //     website._user = userId;
    //     return Website.create(website);
    // }
    //
    // function findWebsiteById(websiteId) {
    //     return Website.findById (websiteId);
    // }
    //
    
};