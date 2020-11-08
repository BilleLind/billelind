var express = require('express');
const { route } = require('./home');
var router = express.Router();


router.get('/', function(req, res) {
  res.send('Tester tester via github actions')
});


router.get('/render', function(req, res) {
  res.send('test')
})

module.exports = router;