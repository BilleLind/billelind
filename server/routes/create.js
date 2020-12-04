var express = require('express');
var router = express.Router();




router.get('/', (req,res) =>{
    res.send('hej')
})


router.get('/article', (req, res)=> {
    res.render('create', {})
})

router.post('/article', )


module.exports = router;