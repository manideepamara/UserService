const { users } = require("../services");

module.exports = (executeCypherQuery)=> ({
  getAllUsers: async (_, res) => {
    const usersList = await users.getAllUsers(executeCypherQuery);
    res.send(usersList);
  },
});
