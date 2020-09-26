const notes = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        // fs.readFile('./db/db.json', function (err, data) {
        // var notesData = JSON.parse(notesData)
        res.send(notes.notes);
        // });
    });

    app.post("/api/notes", function (req, res) {
        var newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text
        };
        notes.notes.push(newNote);
        json = JSON.stringify(notes);
        fs.writeFile("./db/db.json", `${json}`, function (err) {
            if (err) {
                return console.log(err);
            };
        });
        res.send(newNote);
    });


};


