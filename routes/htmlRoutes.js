// Dependencies
var path = require("path");


// ROUTING

module.exports = function (app) {

    // HTML GET Requests

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "..Public/notes.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/index.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/index.html"));
    });
};
