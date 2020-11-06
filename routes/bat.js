const { json } = require('express');
var express = require('express');
const { default: fetch } = require('node-fetch');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    fetch('https://api.coinbase.com/v2/prices/BAT-USD/spot', {
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    }).then(res =>res.text())
    .then(json => {
        console.log(json);
        var obj = JSON.parse(json) //converting JSON to javascript object
        var text = obj.data.amount; // getting the amount value under the data
        var num = parseFloat(text).toFixed(5) //limiting the decimal to 5

        res.render('bat', {title: 'Basic Attention Token', bat: num});
    })
    .catch(err => res.status(500).send(e.message));
});

module.exports = router;