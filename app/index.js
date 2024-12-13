const express = require("express");

const app = express();
//configuring routes
require("./routes")(app);

module.exports = app;
