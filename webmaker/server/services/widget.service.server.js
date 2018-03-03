
/* unlike angular, if w e ask by name, we cant get it */

module.exports= function(app, models){

    var widgetModel = models.widgetModel;

    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });
    /* John pappy's - declare APIs at top and write functions below */


    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
    app.get("/api/widget/:widgetId",findWidgetById);
    app.put("/api/widget/:widgetId",updateWidget);
    app.delete("/api/widget/:widgetId",deleteWidget);
    app.put("/api/page/:pageId/widget",reorderWidgets);

    //UPLOAD
    app.post ("/api/upload", upload.single('myFile'), uploadImage);

    /* pattern matching usies only base URL. it ignores anything after ?
     app.get("/api/user/:userId", findUserById);
     app.get("/api/user/:userId", findUserById);
     are the same URLs to Express!     */
    function uploadImage(req, res) {
        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;


        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;

        if(myFile == null) {
          res.redirect("https://web-app-maker-angular-4.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
            //res.redirect("http://localhost:4200/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
            return;
        }


        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;


        var widget = { url: "assets/uploads/"+filename};

        widgetModel
            .updateWidget(widgetId, widget)
            .then(function (stats) {
                    console.log(stats);
                    res.send(200);
                },
                function (err) {
                    res.sendStatus(404).send(err);
                });

        res.redirect("https://web-app-maker-angular-4.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
        //res.redirect("http://localhost:4200/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
    }


    function reorderWidgets(req,res) {
        var pageId = req.params.pageId;
        var startIndex = parseInt(req.query.start);
        var endIndex = parseInt(req.query.end);
        widgetModel
            .reorderWidgets(pageId, startIndex, endIndex)
            .then(function (stats) {
                res.send(200);

            }, function (err) {
                res.sendStatus(400).send(err);
            });

    }


    function createWidget (req,res) {
        var pageId = req.params.pageId;
        var widget = req.body;


        widgetModel
            .createWidget(pageId, widget)
            .then(function (widget) {
                res.json(widget);

            }, function (err) {
                res.sendStatus(400).send(err);
            });

        // widgets.push(widget);
        // /* return true only if the JSON object is inserted */
        // res.send(200);
    }


    function findAllWidgetsForPage (req,res) {
    var pageId = req.params.pageId;

        widgetModel
            .findAllWidgetsForPage(pageId)
            .then(function (widgets) {
                res.json(widgets);

                },
                function (err) {
                    res.sendStatus(404).send(err);
                });


        // var resultSet = [];
        // for(var i in widgets){
        //     if(widgets[i].pageId === pageId){
        //         resultSet.push(widgets[i]);
        //     }
        // } res.send(resultSet);
    }
    function findWidgetById (req,res) {
        var widgetId  = req.params.widgetId;

        widgetModel
            .findWidgetById(widgetId)
            .then(function (widget) {
                    res.json(widget);
                },
                function (err) {
                    res.sendStatus(404).send(err);
                });
        // for(var i in widgets){
        //     if(widgetId === widgets[i]._id){
        //         res.send(widgets[i]);
        //     }
        // }
    }
    function updateWidget (req,res) {

        var widgetId  = req.params.widgetId;
        var widget = req.body;

        widgetModel
            .updateWidget(widgetId, widget)
            .then(function (stats) {
                    console.log(stats);
                    res.send(200);
                },
                function (err) {
                    res.sendStatus(404).send(err);
                });



    }
    function deleteWidget (req,res) {
        var widgetId  = req.params.widgetId;
        var pageId = req.query.pageId;
        // var position = req.query.postobedeleted;
        // widgetModel
        //     .updatePosition(pageId, position)
        //     .then(function (stats) {
                widgetModel
                    .deleteWidget(widgetId)
                    .then (function (stats) {
                            console.log(stats);
                            res.send(200);
                        },
                        function (err) {
                            res.sendStatus(404).send(err);
                        });
            // });



    }
};
