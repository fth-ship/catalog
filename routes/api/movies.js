var superagent = require('superagent').agent();
var debug = require('debug')('catalog');
var util = require('util');
var config = require('../../config')(process.env.NODE_ENV || 'development');

function apiMoviesHandler(req, res) {
  debug('api movies handler');
  var out = { status: false, result: [], total: 0, message: [] };
  var query = req.query;
  var rottenPath = [config.rottenURL, 'movies.json'].join('');

  query.apikey = config.rottenApiKey;

  function successHandler(result) {
    debug('success handler');
    out.status = true;
    out.message.push('success!');
    out.result = result.movies;
    out.total = result.total;
    res.send(out);
  }

  function failHandler(message) {
    debug('fail handler');
    out.message.push(message);
    res.send(out);
  }

  function cleanText(input) {
    var out = input || '';

    out = out.replace(/\n/g, '');

    return out;
  }

  function toJson(input) {
    var out = input;

    out = JSON.parse(input);

    return out;
  }

  function completeHandler(err, res) {
    debug('complete handler');
    var body = cleanText(res.text);
    if (!err && (res.text)) {
      successHandler(toJson(body)); 
    } else {
      failHandler('failed!');
    }
  }

  debug(rottenPath);
  superagent
    .get(rottenPath)
    .query(query)
    .end(completeHandler);
}
module.exports = exports = apiMoviesHandler;
