module.exports = function (app){
  require("./services/user.service.server")(app);
  require("./services/widget.service.server")(app);
  require("./services/webiste.service.server")(app);
  var db = require("./models/model");
}
