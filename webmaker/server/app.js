
/* req = parses the req from http, parses and makes it a nice clean object */

// params is part of the request. any variables in the path will be available as a a map in params

module.exports = function (app) {

    require("./services/user.service.server.js")(app);
    require("./services/website.service.server.js")(app);
    require("./services/page.service.server.js")(app);
    require("./services/widget.service.server.js")(app);

    require("./model/model.server");
};


