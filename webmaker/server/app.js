
/* the functioni sa Java script constructor which will be instantiated from top level server.js */

/* req = parses the req from http, parses and makes it a nice clean object */

// params is part of the request. any variables in the path will be available as a a map in params

module.exports = function (app) {
    /* passing the instance app and immediately calling it*/
    // we are pasbsing app and models to the services
    // instantiate them from
    var models = require("./model/models.server.js")();

   // pas the models to services.
    require("./services/user.service.server.js")(app, models);
    require("./services/website.service.server.js")(app, models);
    require("./services/page.service.server.js")(app, models);
    require("./services/widget.service.server.js")(app, models);




    app.get("/say/:something", function(req, res){
        var msg = req.params['something'];
        res.send({message: msg});
    });



    // app.get("/users/:id", function (req, res) {
    //     var id = req.params.id;
    //     for(var i in users){
    //         if(users[i]._id === id ){
    //             res.send (users[i].firstName);
    //             return;
    //
    //         }
    //
    //     }
    //     res.send({});
    // });
};

