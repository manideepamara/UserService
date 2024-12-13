const startServer = async () => {
  const establishConnection = require("./app/middleware/graphDBConnect");
  const executeCypherQuery = await establishConnection()
  const app = require("./app")(executeCypherQuery);
  const PORT = 3000;
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("server is listening on PORT", PORT);
  });
};

startServer();
