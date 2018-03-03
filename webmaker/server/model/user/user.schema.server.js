//we create a schema

module.exports = function () {
  var mongoose = require("mongoose"); // mongoDb has no notion of schemas. this is at the application level

    var UserSchema = mongoose.Schema ({
        username : {type: String, required: true},
        password : String,
        firstName : String,
        email : String,
        facebook : {
            token: String,
            id: String,
            displayName : String
        },
        lastName : String,
        dob: Date,
        websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Website'}],
        dateCreated : {type: Date, default : Date.now} //Date.now is the current time
    }, {collection: "assignment.user" });

    return UserSchema;
};
