// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 4000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Data
var tables = [{
    routeName: "yoda",
    name: "Yoda",
    phone: 18001234567,
    email: "yoda@starwars.com",
    uniqueID: 001
}];

var waitlist = [{
    routeName: "ned",
    name: "Ned",
    phone: 18002417629,
    email: "ned@gmail.com",
    uniqueID: 002
}];

// Routes
// ===========================================================
app.get("/", function (req, res) {
    res.send("Welcome to the Hot Restaurant Page!");
});

app.get('/api/tables', function (req, res) {
    res.send('Hot Restaurant Tables Page');
});

app.get('/api/waitlist', function (req, res) {
    res.send('Hot Restaurant Waitlist Page');
});

app.post("/api/tables", function (req, res) {
    var newTable = req.body;

    console.log(newTable);
    console.log(tables);

    if (tables.length < 5) {
        tables.push(newTable);
        newTable.reservation = true;
        res.json(newTable);
    } else {
        waitlist.push(newTable);
        newTable.reservation = false;
        res.json(newTable);
    }

    res.json(tables);
});

app.post("/api/waitlist", function (req, res) {
    res.json(waitlist);
});

// Listen
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});