//we create a schema

module.exports = function () {
  var mongoose = require("mongoose"); // mongoDb has no notion of schemas. this is at the application level

    var PageSchema = mongoose.Schema ({
        _website : {type : mongoose.Schema.ObjectId, ref: "Website"},
        name : {type : String, required : true},

        title : String,
          widgets:[{type: mongoose.Schema.Types.ObjectId, ref: 'Widget'}],
        dateCreated : {type: Date, default : Date.now} //Date.now is the current time
    }, {collection: "assignment.page" });

    return PageSchema;
};