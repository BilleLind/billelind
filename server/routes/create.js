var express = require('express');
var router = express.Router();




router.get('/', (req,res) =>{
    res.send('hej')
})

router.get('/blog', (req, res) => {


    res.render('blog')
})

router.get('/article', (req, res)=> {
    res.render('create', {})
})


module.exports = router;