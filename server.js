// dependencies 
// ********************************
const express = require("express");
const bodyparser = require("body-parser");
var path = require("path");
var http = require('http'); 

// express setup
// ********************************
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

// routes
// *********************************
app.get("/", function (req, res) {
    res.render(path.join(__dirname, "/index"));
});

// starts local server to listen on PORT 8080
// *********************************
app.listen(PORT, function () {
    console.log("App listening on port " + PORT);
});