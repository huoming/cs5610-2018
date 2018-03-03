

/*entry gate in to the database connection */
// we create a node JS module
module.exports  = function () {

    //connect to mongodb using mongoose library
    // var mongoose = require('mongoose');
    // mongoose.connect('mongodb://localhost/webdev-assignment');
    //
    
    
    var models = {
        userModel: require("./user/user.model.server")(),
        websiteModel: require("./website/website.model.server")(),
        pageModel: require("./page/page.model.server")(),
        widgetModel: require("./widget/widget.model.server")()
        //TODO : add all other models
    };
    return models;
};