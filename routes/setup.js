function setupHandler(app, routes) {
  app.get('/', routes.app.index);
  app.get('/partials/:name', routes.app.partials);
}
module.exports = exports = setupHandler;
