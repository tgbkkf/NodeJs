var routeLogin = require('./loginRoutes');
var routeHome = require('./homeRoutes');
var routeStok = require('./stokRoutes');

module.exports = function(app){
    app.use('/login', routeLogin);
    app.use('/', routeHome);
    app.use('/stok', routeStok);

}