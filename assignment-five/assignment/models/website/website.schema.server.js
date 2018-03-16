var mongoose = require('mongoose');

var websiteSchema =mongoose.Schema({
  name: String,
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  description: String,
  visitCount: Number
}, {collection: 'website'})

module.exports = websiteSchema;
