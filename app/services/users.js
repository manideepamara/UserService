
const { prepareDataFromQuery } = require("../utils/queryDataUtil");
const establishConnection = require("../middleware/graphDBConnect");
module.exports = {
  getAllUsers: async () => {
    try {
      const executeCypherQuery = await establishConnection()
      console.log("fetching users")
      const userRecords =
        await executeCypherQuery(`MATCH(parent:PERSON) - [:isparent] -> (child:PERSON)
        RETURN child.name as name, child.description as description, parent.name as parent`);
      return prepareDataFromQuery(userRecords);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
