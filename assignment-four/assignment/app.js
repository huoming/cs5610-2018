module.exports = function (app){
  require("./services/user.service.server")(app);
  require("./services/widget.service.server")(app);
}
