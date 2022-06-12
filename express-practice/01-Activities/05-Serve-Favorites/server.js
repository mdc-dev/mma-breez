var http = require("http");
var fs = require("fs");

var PORT = 5500;

var server = http.createServer(handleRequest);

var relPath = "public/"

function handleRequest(req, res) {
    var path = req.url;
    
    switch(path) {
        case '/':
            var route = "index"
            return display(res, route);
        case "/foods":
            var route = "foods"
            return display(res, route);
        case "/movies": 
            var route = "movies"
            return display(res, route);
        case "/css":
            var route = "css"
            return display(res, route);
    }
};


function display(res, route) {
    fs.readFile(relPath + route + ".html", "utf8", (err, html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    })
};
// function displayHome(res) {
//     fs.readFile(relPath + "index.html", "utf8", (err, html) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(html);
//     })
// };

// function displayFoods(res) {
//     fs.readFile(relPath + "foods.html", "utf8", (err, html) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(html);
//     })
// };

// function displayMovies(res) {
//     fs.readFile(relPath + "movies.html", "utf8", (err, html) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(html);
//     })
// };

// function displayCss(res) {
//     fs.readFile(relPath + "css.html", "utf8", (err, html) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(html);
//     })
// };


server.listen(PORT, function() {
    console.log("Now Listening on PORT: " + PORT)
});