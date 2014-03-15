function setupHandler(app, routes) {
  app.get('/', routes.app.index);
  app.get('/partials/:name', routes.app.partials);

  app.get('/api/movies', routes.api.movies);
}
module.exports = exports = setupHandler;
