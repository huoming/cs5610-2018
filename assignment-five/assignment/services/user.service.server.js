module.exports = function (app) {

  var userModel = require("../models/user/user.model.server");

  app.get("/api/user/hello", helloUser);
  app.get("/api/user/:userId", findUserById)
  //app.get("/api/user", findAllUsers);
  app.get("/api/user", findUsers);
  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);

  /*var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];*/

  function createUser(req, res){
    var newUser = req.body;
    userModel.createUser(newUser)
      .then(function(user){
        res.json(user);
      })
  }

  function updateUser(req, res){
    var userId = req.params.userId;
    var user = req.body;

    userModel.updateUser(userId, user)
      .then(function(status){
        res.send(status);
      })
  }


  function helloUser(req, res) {
    res.send("Hello from user service!");
  }

  function findUserById(req, res){
    var userId = req.params["userId"]
    userModel.findUserById(userId).then(function (user){
      res.json(user);
    })
  }
  function findAllUsers(req, res){
    res.json(users);
  }

  function findUsers(req, res){
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password){
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user){
        res.json(user);
        //console.log(user);
      })
      return;
    } else if (username){
      userModel.findUserByUserName(username)
        .then(function(user){
          res.json(user);
        })
      return;
    }
    res.json(users);
  }

}
