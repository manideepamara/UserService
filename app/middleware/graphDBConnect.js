const neo4j = require("neo4j-driver");

module.exports = async () => {
  const URI = process.env.NEO4J_URI;
  const USER = process.env.NEO4J_USERNAME;
  const PASSWORD = process.env.NEO4J_PASSWORD;
  let driver;

  try {
    driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
    const serverInfo = await driver.getServerInfo();
    console.log("Connection established");
    console.log(serverInfo);
  } catch (err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`);
    await driver.close();
  }

  return async (statement, params = {}) => {
    try {
      let { records } = await driver.executeQuery(statement, params, {
        database: "neo4j",
      });
      return records;
    } catch (error) {
      throw error;
    } finally {
      console.log("closing db connection");
      await driver.close();
    }
  };
};