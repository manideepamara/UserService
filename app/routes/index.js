const users = require('./users');
const routeNotFound = require('./404');

module.exports = (app,executeCypherQuery) => {
    app.use('/users', users(executeCypherQuery));
    app.use('*', routeNotFound)
}
