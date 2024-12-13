module.exports = (executeCypherQuery) => {
  const express = require("express");

  const app = express();
  //configuring routes
  require("./routes")(app,executeCypherQuery);

  return app;
};
