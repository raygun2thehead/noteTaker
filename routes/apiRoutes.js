var notesData = require("../db/db.json");
var fs = require("fs");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    // fs.readFile('./db/db.json', function (err, data) {
    //     var notesData = JSON.parse(data.notes)
        res.send(notesData.notes);
    // });
  });

  app.post("/api/notes", function (req, res) {
    var newNote = {
        title: req.body.title,
        text: req.body.text
    };  
    notesData.notes.push(newNote);

    json = JSON.stringify(notesData);
    fs.writeFile("./db/db.json", `${json}`, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    console.log(newNote)
    res.send(newNote);
});


};


