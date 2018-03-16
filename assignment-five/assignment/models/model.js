var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/webdev', {useMongoClient: true});

module.exports = db;
