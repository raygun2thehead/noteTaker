var notesData = require("../db/db.json");
var fs = require("fs");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.send(notesData);
  });

  app.post("/api/notes", function (req, res) {
    var newNote = {
        title: req.body.title,
        text: req.body.text

    };
    console.log(newNote)
    notesData.push(newNote);
    res.send(newNote);
});


};


