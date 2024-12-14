const express = require("express");
const cors = require('cors');

const app = express();
//configuring routes
app.use(cors());
require("./routes")(app);

module.exports = app;
