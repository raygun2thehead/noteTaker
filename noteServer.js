// var fs = require("fs");
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });