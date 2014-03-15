function appPartialsHandler(req, res) {
  var viewPath = [
    'partials',
    req.params.name   
  ].join('/');
  res.render(viewPath);
}
module.exports = exports = appPartialsHandler;
