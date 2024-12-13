
const { prepareDataFromQuery } = require("../utils/queryDataUtil");

module.exports = {
  getAllUsers: async (executeCypherQuery) => {
    try {
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
