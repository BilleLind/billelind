var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.send('Tester tester via github actions')
});

module.exports = router;