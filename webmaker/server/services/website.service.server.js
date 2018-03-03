
/* unlike angular, if w e ask by name, we cant get it */

module.exports= function(app, models){

    var websiteModel = models.websiteModel;



    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",    "developerId": "123" },
        { "_id": "789", "name": "Chess",       "developerId": "234" }
    ];

    /* John pappy's - declare APIs at top and write functions below */


    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website",findAllWebsitesForUser);
    app.get("/api/website/:websiteId",findWebsiteById);
    app.put("/api/website/:websiteId",updateWebsite);
    app.delete("/api/website/:websiteId",deleteWebsite);

    /* pattern matching usies only base URL. it ignores anything after ?
     app.get("/api/user/:userId", findUserById);
     app.get("/api/user/:userId", findUserById);
     are the same URLs to Express!     */

    function createWebsite(req,res) {


        var userId = req.params.userId;
        var website = req.body;

        console.log("request received to create a website ", userId, website);

        websiteModel
            .createWebsiteForUser(userId, website)
            .then (function (website) {
                res.json(website);
            },
            function (err) {
                res.sendStatus(400).send(err);
            });
        // website._id = (new Date()).getTime()+"";
        //
        // websites.push(website);
        //
        // res.send(website);

    }


    function findAllWebsitesForUser(req,res) {
        var userId = req.params.userId;
        console.log(userId);

        websiteModel
            .findAllWebsitesForUser(userId)
            .then(function (websites) {
                res.json(websites);
            },
            function (err) {
                res.sendStatus(404).send(err);
            });

        /*retrieves the websites in local websites array whose developerId matches the parameter userId */
        // var resultSet = [];
        // for (var i in websites){
        //     if (websites[i].developerId === userId) {
        //         resultSet.push(websites[i]);
        //     }
        // }
        // res.send(resultSet);


    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;

        websiteModel
            .findWebsiteById(websiteId)
            .then(function (website) {
                    res.json(website);
            },
            function (err) {
                res.sendStatus(404).send(err);
            });
        // for (var i in websites){
        //     if(websites[i]._id === websiteId){
        //         res.send(websites[i]);
        //
        //     }
        // }
        // //return null;
        // res.send({});
    }

    function updateWebsite(req,res) {
        var websiteId = req.params.websiteId;
        var website  = req.body;
        websiteModel
            .updateWebsite(websiteId, website)
            .then (function (stats) {
                    console.log(stats);
                    res.send(200);
            },
            function (err) {
                res.sendStatus(404).send(err);
            });
        // for (var i in websites){
        //     if(websites[i]._id === websiteId){
        //         websites[i].name = website.name;
        //         websites[i].description = website.description;
        //         res.send(200);
        //     }
        // }
        // res.send(400);
    }

    function deleteWebsite(req,res) {
        var websiteId = req.params.websiteId;


        websiteModel
            .deleteWebsite(websiteId)
            .then (function (stats) {
                    console.log(stats);
                    res.send(200);
                },
                function (err) {
                    res.sendStatus(404).send(err);
                });
        // for (var i in websites){
        //     if (websites[i]._id === websiteId){
        //         websites.splice(i, 1);
        //         res.send(200);
        //     }
        // }
        // res.send(400);

    }


};
