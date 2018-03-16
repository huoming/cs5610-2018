module.exports = function (app) {

  app.get("/api/hello", hello);

  function hello(req, res) {
    console.log("Hello from Root context handler");
    //res.send("hello from root context handler");
    res.send({message: "Hello from handler in json 123"});
  }
}
