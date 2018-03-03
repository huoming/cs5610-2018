//we create a schema

module.exports = function () {
  var mongoose = require("mongoose"); // mongoDb has no notion of schemas. this is at the application level

    var WidgetSchema = mongoose.Schema ({
        _page : {type : mongoose.Schema.ObjectId, ref: "Page"},
        type: {type: String, enum: ['Header', 'Image', 'YouTube', 'HTML', 'Text']} ,
        name : {type : String},
        text : String,
        placeholder : String,
        description : String,
        url : String,
        width : String,
        height: Number,
        rows : Number,
        size : Number,
        class : String,
        icon : String,
        deletable: Boolean,
        formatted: Boolean,
        position: Number, //for sortable
        dateCreated : {type: Date, default : Date.now} //Date.now is the current time
    }, {collection: "assignment.widget" });

    return WidgetSchema;
};
