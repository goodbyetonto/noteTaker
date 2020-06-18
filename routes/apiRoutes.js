// Dependenciess

var notesDb = require("../Data/db.json");

// ROUTING

module.exports = function (app) {

    // API GET Requests

    app.get("/api/notes", function (req, res) {
        res.json(notesDb);
    });

    // API POST Requests

    app.post("/api/notes", function (req, res) {
        notesDb.push(req.body);
        notesDb.id = notesDb.length; 
        console.log(notesDb); 
        return res.json();
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
