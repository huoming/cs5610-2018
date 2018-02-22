
module.exports = function (app) {
  app.get("/api/user/hello", helloUser);
  app.get("/api/user/:userId", findUserById)
  //app.get("/api/user", findAllUsers);
  app.get("/api/user", findUsers);

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

  function helloUser(req, res) {
    res.send("Hello from user service!");
  }

  function findUserById(req, res){
    var userId = req.params["userId"];
    var user = users.find(function (user) {
       return user._id === userId;
    });
    res.json(user);
  }
  function findAllUsers(req, res){
    res.json(users);
  }

  function findUsers(req, res){
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password){
      var user = users.find(function (user) {
          return user.username === username && user.password === password;
      });
      if (user){
        res.json(user);
      } else {
        res.json({});
      }
    } else if (username){
      var user = users.find(function (user) {
        return user.username === username;
      });
      if (user) {
        res.json(user);
      } else {
        res.json({});
      }
      return;
    }
    res.json(users);
  }

}
