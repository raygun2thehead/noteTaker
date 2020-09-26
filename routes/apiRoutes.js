const db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
// console.log(db[0].id);

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {

        res.send(db);

    });

    app.post("/api/notes", function (req, res) {
        var newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text
        };
        db.push(newNote);
        json = JSON.stringify(db);
        fs.writeFile("./db/db.json", `${json}`, function (err) {
            if (err) {
                return console.log(err);
            };
        });
        res.send(newNote);
    });



    app.delete("api/notes/:id", function (req, res) {
        var delNoteId = req.params.id;
        db.forEach(obj => {
            if(obj.id === delNoteId){
                var indexObj = db.indexOf(obj);
                db.splice(indexObj, 1);
            }
        });
        console.log(delNoteId, "line40");
        // json = JSON.stringify(db);
        // fs.writeFile("./db/db.json", `${json}`, function (err) {
        //     if (err) {
        //         return console.log(err);
        //     };
        // });
     
            
        // }
        console.log(res.send(db));
        // });
    });

};




