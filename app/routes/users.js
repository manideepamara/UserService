

const express = require('express');
const { users } = require("../controllers");




module.exports = (executeCypherQuery) => {
    const router = express.Router();

    router.get('/',users(executeCypherQuery).getAllUsers);
    return router;
};
