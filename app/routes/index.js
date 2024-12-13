const users = require('./users');
const routeNotFound = require('./404');

module.exports = (app) => {
    app.use('/users', users);
    app.use('*', routeNotFound)
}
