// DEPENDENCIES
var path = require("path");


// ROUTING

module.exports = function (app) {

    // HTML GET REQUESTS

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/notes.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/index.html"));
    });

    // // Default to index.html
    // app.get("*", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../Public/index.html"));
    // });
};
