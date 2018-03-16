module.exports = function(app){
  var WEBSITES = require("./website.mock.server");

  app.get("/api/user/:userId/website", findWebsiteForUser);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);
  app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
  app.put("/api/user/:userId/website/:websiteId", updateWebsiteById);

  var websiteModel = require('../models/website/website.model.server');

  function updateWebsiteById(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES[i] = newWebSite;
        break;
      }
    }
    res.json(getWebsitesForUserId(userId));
  }

  function findWebsiteById(req, res){
    var user = req.params['userId'];
    var websiteId = req.params['websiteId'];
    res.json(getWebsiteById(websiteId));
  }

  function deleteWebsite(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES.splice(i, 1);
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }

  }

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    website.developerId = userId;
    delete website._id;
    websiteModel.createWebsite(website)
      .then(function (website){
        websiteModel.findWebsitesForUser(userId)
          .then(function (websites){
            res.json(websites);
          })
      }, function(err){
        console.log(err);
      });
  }

  function findWebsiteForUser(req, res) {
    var userId = req.params['userId'];
    websiteModel.findWebsitesForUser(userId)
      .then(function(websites){
        res.json(websites);
      })
    // var websites= getWebsitesForUserId(userId);
    // res.json(websites);
  }

  function  getWebsitesForUserId(userId) {
    var websites=[];

    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function getWebsiteById(websiteId){
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        return WEBSITES[i];
      }
    }
  }
}
