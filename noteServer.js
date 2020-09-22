var fs = require("fs");
var express = require("express");
var path = require("path");

var PORT = 8080;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });