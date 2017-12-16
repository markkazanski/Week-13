var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

    case "/":
      return displayRoot(path, req, res);

    case "/foods.html":
      return displayFoods(path, req, res);

    case "/movies.html":
      return displayMovies(path, req, res);

    case "/frameworks.html":
      return displayFrameworks(path, req, res);

    default:
      return display404(path, req, res);
  }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/index.html", function(err, data) {
        //console.log(data);
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
            
    });
}

function displayFoods(url, req, res) {
    fs.readFile(__dirname + "/foods.html", function(err, data) {
        //console.log(data);
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
            
    });  
}

function displayMovies(url, req, res) {
    fs.readFile(__dirname + "/movies.html", function(err, data) {
        //console.log(data);
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
            
    });    
}

function displayFrameworks(url, req, res) {
    fs.readFile(__dirname + "/frameworks.html", function(err, data) {
        //console.log(data);
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
            
    });    
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  var myHTML =  "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(myHTML);
}
