var mongoose = require("mongoose");
var websiteSchema = require('../website/website.schema.server')

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstname:String,
  lastname: String,
  websites:[websiteSchema],
  dob: Date,
  salary: Number,
}, {collection:'user'});

module.exports = UserSchema;
