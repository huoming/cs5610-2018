
// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

/*var dbServer = require('./test-mongodb/app');
dbServer(app);*/

require('./test-mongodb/app')(app);


// For Build: Catch all other routes and return the index file -- BUILDING
/*
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
*/


/*
app.get("/api/user/hello", helloUser);
app.get("/api/user/:userId", findUserById)
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
  var user = null;

  if (username && password){
      user = users.find(function (user) {
      return user.username === username && user.password === password;
    });
  } else if (username){
      user = users.find(function (user) {
      return user.username === username;
    });
  }
  res.json(users);
}
*/


require('./assignment/app')(app);



