var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'URL Shortener' });
});
router.post('/shorten', function(req, res, next) {
  console.log("wtf is this shit = " + req.body);
});
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/users/detail', function(req, res, next) {
  res.send('detail');
});
module.exports = router;
