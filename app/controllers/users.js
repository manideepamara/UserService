const { users } = require("../services");

module.exports = {
  getAllUsers: async (_, res) => {
    const usersList = await users.getAllUsers();
    res.send(usersList);
  },
};
