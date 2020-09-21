var http = require("http")
var fs = require("fs")
var express = require("express")

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;

  switch (path) {
  case "/notes":
    return renderNotes(req, res);
  default:
    return renderIndex(req, res);
  }
}

function renderNotes(req, res) {
    fs.readFile(__dirname + "/public/notes.html", function(err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
      }
      else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }

  function renderIndex(req, res) {
    fs.readFile(__dirname + "/public/index.html", function(err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
      }
      else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });