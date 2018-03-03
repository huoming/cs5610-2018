var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");

module.exports = function (app, models) {

  var userModel = models.userModel;
  var facebookConfig = {
    clientID     : 'process.env.FB_CLIENT_ID_WAM',
    clientSecret : 'process.env.FB_CLIENT_SECRET_WAM',
    callbackURL  : 'process.env.FB_CALL_BACK_URL_WAM'
  };

  app.post("/api/user", createUser);
  app.get("/api/user", getUsers);
  app.post("/api/logout", logout);
  app.get("/api/user/:userId", findUserById);
  app.delete("/api/user/:userId", deleteUser);
  app.put("/api/user/:userId", updateUser);

  //authentication api
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post ('/api/loggedIn', loggedIn);

  // auth with Facebook
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/assignment/#/profile',
      failureRedirect: '/assignment/#/login'
    }));
  app.get ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // passport config
  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function (err) {
          res.sendStatus(400).send(err);
        });
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    model.userModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              lastName:  names[1],
              firstName: names[0],
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id:    profile.id,
                token: token
              }
            };
            return model.userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }


  function findUserByCredentials (username, password, req, res){
    userModel
      .findUserByCredentials(username, password)
      .then(
        function(user) {
          console.log(user);
          if (user) {
            res.json(user);
          }
          else {
            res.send('0');
          }
        },
        function(err) {
          res.sendStatus(400).send(err);
        }
      );
  }

  function facebookLogin(token, refreshToken, profile, done) {
    //check if the fb user already exists in our DB

    userModel
      .findFacebookUser(profile.id)
      .then(
        function (facebookUser) {
          // we arent validating, but checking if the user exists
          // only in local strategies we do validation here
          if (facebookUser) {
            return done(null, facebookUser);
          } else {
            //if th euser doesnt exist, we create here
            facebookUser = {
              username: profile.displayName.replace(/ /g, ''),
              facebook: {
                token: token,
                id: profile.id,
                displayName: profile.displayName
              }
            }
          }
          userModel
            .createUser(facebookUser)
            .then(
              function (user) {
                done(null, user);
              }
            );
        }
      );
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .findUserByUsername(user.username)
      .then(function (data) {
        if(data){
          res.status(400).send('Username is in use!');
          return;
        } else{
          userModel
            .createUser(user)
            .then(
              function(user){
                if(user){
                  req.login(user, function(err) {
                    if(err) {
                      res.status(400).send(err);
                    } else {
                      res.json(user);
                    }
                  });
                }
              }
            );
        }
      })

  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.send(200); //success
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function createUser(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(
        function (user) {
          res.json(user);
        },
        function (error) {
          res.statusCode(400).send(error);
        }
      )
  }

  function deleteUser(req, res) {
    var userId = req.params.userId;

    userModel
      .deleteUser(userId)
      //responds with some stats
      .then(function (stats) {

          res.send(200);
        },
        function (error) {
          res.statusCode(404).send(error);
        });
  }

  function updateUser(req, res) {


    var userId = req.params.userId;
    var user = req.body;

    console.log('server side', userId, user);

    userModel
      .updateUser(userId, user)
      .then(function (stats) {

          res.send(200);
        },
        function (error) {
          res.statusCode(404).send(error);
        });

    // for (var i in users){
    //     if(users[i]._id === userId){
    //         users[i].firstName = user.firstName;
    //         users[i].lastName = user.lastName;
    //         users[i].email = user.email;
    //         res.send(200);
    //     }
    // }
    // res.send(400);
  }

  function findUserById(req, res) {
    var id = req.params.userId;

    userModel
      .findUserById(id)
      .then(function (user) {
          res.send(user);
        },
        function (error) {
          res.statusCode(404).send(error);
        });
    // for (var i in users){
    //     if(users[i]._id === id){
    //         res.send(users[i]);
    //         return;
    //     }
    // } res.send({});
  }

  function getUsers(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];

    if (username && password) {
      findUserByCredentials(username, password, req, res);
    } else if (username) {
      findUserByUsername(username, res);
    } else {
      res.send(users);
    }
  }

  function findUserByUsername(username, res) {
    userModel
      .findUserByUsername(username)
      .then(function (user) {
          res.json(user);
        },
        function (err) {
          res.statusCode(404).send(err);
        });
    // for (var i in users){
    //     if(users[i].username === username){
    //         res.send(users[i]);
    //         return;
    //     }
    // }
    //
    // var errMsg = generateError(username, password);
    // console.log(errMsg);
    // res.send(errMsg);
  }


  /* helper functions */
  function generateError(username, password) {

    for (var i in users) {
      if (users[i].username === username &&
        users[i].password !== password) {
        return "Wrong Password. Wake Up!";
      }
    }
    return "Username doesn't exist !!!";

  }

  function getRegisterError(user) {
    for (var i in users) {
      if (users[i].username === user.username) {
        return "Username is already chosen. Either be creative or forget this.";

      }

    }
    return "the passwords do not match! Wake up";
  }

};
