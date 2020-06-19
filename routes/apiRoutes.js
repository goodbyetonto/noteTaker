// Dependenciess

const notesDb = require("../Data/db.json");
const fs = require("fs");

// ROUTING

module.exports = function (app) {

    // API GET Requests

    app.get("/api/notes", (req, res) => {
        fs.readFile("./Data/db.json", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        })
    });


    // API POST Requests

    app.post("/api/notes", (req, res) => {
        const newNote = req.body;

        fs.readFile("./Data/db.json", (err, data) => {
            if (err) throw err;

            const notesArray = JSON.parse(data);
            newNote.id = notesArray.length;
            console.log(newNote);
            notesArray.push(newNote);

            fs.writeFile("./Data/db.json", JSON.stringify(notesArray), err => {
                if (err) throw err;
                console.log('Note added!');
            });
        })

        // return the new note
        res.json(newNote);
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        tableData.length = 0;
        waitListData.length = 0;

        res.json({ ok: true });
    });
};
