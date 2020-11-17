var express = require('express');
const app = require('../server');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'Tester succes', message: 'Welcome to testing route!'});
});

router.get('/render', (req, res) =>{
  res.render('test', {layout: false})
})


/*router.get('/render', function(req, res) {
  res.render('test', {title: 'render test'})
}) */

module.exports = router;