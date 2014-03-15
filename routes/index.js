var routes = exports;

routes.setup = require('./setup');

routes.app = {};
routes.app.index = require('./app');
routes.app.partials = require('./app/partials');

routes.api = {};
routes.api.movies = require('./api/movies');
