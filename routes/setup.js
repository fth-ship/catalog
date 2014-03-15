function setupHandler(app, routes) {
  app.get('/', routes.app.index);
}
module.exports = exports = setupHandler;
