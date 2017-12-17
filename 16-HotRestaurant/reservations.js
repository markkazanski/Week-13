// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

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
    uniqueID: 1
}];

var waitlist = [{
    routeName: "ned",
    name: "Ned",
    phone: 18002417629,
    email: "ned@gmail.com",
    uniqueID: 2
}];

// Routes
// ===========================================================
/*app.get("/", function (req, res) {
    res.send("Welcome to the Hot Restaurant Page!");
});*/

app.get('/api/tables', function (req, res) {
    res.json(tables);
});

app.get('/api/waitlist', function (req, res) {
    res.json(waitlist);
});

app.post("/api/tables", function (req, res) {
    var newTable = req.body;

    console.log(newTable);

    if (tables.length < 5) {
        tables.push(newTable);
      newTable.reservation = true;
        res.json(newTable);
      	console.log('You have a reserved table');
    } else {
        waitlist.push(newTable);
      newTable.reservation = false;
        res.json(newTable);
      	console.log('No reservations at this time, you are on the waitlist');
    }

    console.log(tables);
    console.log(waitlist);
});

app.post("/api/waitlist", function (req, res) {
    res.json(waitlist);
});

// TESTING: shows the tables array on the main /api page
app.get("/api/:tables?", function(req, res) {
  return res.json(tables);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Listen
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});