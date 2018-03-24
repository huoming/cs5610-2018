
// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here
var mongoose = require ("mongoose");
var PageSchema = require("./page.schema.server");
var PageModel =  mongoose.model("Page", PageSchema); //mongo plurarizes

PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.createPage = createPage;
PageModel.updatePage = updatePage;
PageModel.findPageById = findPageById;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function findAllPagesForWebsite(websiteId) {
    return PageModel.find({_website: websiteId});
}

function createPage(websiteId, page) {
    page._website= websiteId;
    return PageModel.create(page);

}

function updatePage(pageId, page) {
    delete page._id;
    return PageModel
        .update({_id: pageId}, {
                $set: {
                    name: page.name,
                    title: page.title
                }
            }
        );
}

function findPageById(pageId) {
    return PageModel.findById (pageId);
}

function deletePage(pageId) {
    return PageModel.remove({_id: pageId});
}