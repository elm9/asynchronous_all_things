// dependencies 
// ********************************
const express = require("express");
const bodyparser = require("body-parser");

// express setup
// ********************************
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
// *********************************


// starts local server to listen on PORT 8080
// *********************************
app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
});


