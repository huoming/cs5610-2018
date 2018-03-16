
/*module.exports = function (app) {

  // mongodb://<dbuser>:<dbpassword>@ds113505.mlab.com:13505/webdev
  var connectionString = 'mongodb://127.0.0.1:27017/webmaker';
  var mongoose = require("mongoose");
  mongoose.createConnection( connectionString);

  var userModel = require("./model/user/user.model.server")(mongoose);
  require("./services/user.service.server")(app, userModel);

}*/

module.exports = function (app){

  var db = require("./model/model");
  require("./services/user.service.server")(app, db);
  //require("./services/widget.service.server")(app);
  //require("./services/webiste.service.server")(app);


}
