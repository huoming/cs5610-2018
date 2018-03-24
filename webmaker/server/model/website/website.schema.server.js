//we create a schema

/*module.exports = function () {
  var mongoose = require("mongoose"); // mongoDb has no notion of schemas. this is at the application level

    var WebsiteSchema = mongoose.Schema ({
        _user : {type : mongoose.Schema.ObjectId, ref: "User"},
        name : {type : String, required : true},

        description : String,
        pages:[PageScheme],
        dateCreated : {type: Date, default : Date.now} //Date.now is the current time
    }, {collection: "assignment.website" });

    return WebsiteSchema;
};*/

//refactored code
var mongoose = require("mongoose"); // mongoDb has no notion of schemas. this is at the application level
var PageSchema = require("../page/page.schema.server");
var WebsiteSchema = mongoose.Schema ({
    _user : {type : mongoose.Schema.ObjectId, ref: "User"},
    name : {type : String, required : true},

    description : String,
    pages:[PageSchema],
    dateCreated : {type: Date, default : Date.now} //Date.now is the current time
}, {collection: "assignment.website" });