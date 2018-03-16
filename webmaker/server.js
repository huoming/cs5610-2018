/**
 * Created by sesha on 6/2/17.
 */

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

// loading authentication modules
const passport      = require('passport');
const cookieParser  = require('cookie-parser');
const session       = require('express-session');

app.use(session({
  secret: 'this is the secret',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

/* Mongodb    */

// mongodb://<dbuser>:<dbpassword>@ds113505.mlab.com:13505/webdev
var connectionString = 'mongodb://127.0.0.1:27017/webmaker';
/*var connectionString = 'mongodb://heroku-url';*/
var mongoose = require("mongoose");
mongoose.createConnection( connectionString);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist -- For building
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


//For Build: When we build, we serve this for dist
const api = require('./server/routes/api');
// Set our api routes	 // Set our api routes
app.use('/api', api);

// Get port from environment and store in Express.
const port = '5000' ;
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);


// Server side API
var serverSide = require('./server/app');
serverSide(app);


var PPORT = process.env.PORT || port;

//Listen on provided port, on all network interfaces.
//server.listen(process.env.PORT , () => console.log(`API running on localhost:${port}`)); //-- working on heroku
server.listen(PPORT , () => console.log(`API running on localhost:${port}`)); //-- working on LocalHost
