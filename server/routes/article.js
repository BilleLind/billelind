var express = require('express');
var router = express.Router();
const Article = require('../models/article')



//show all articles descending
router.get('/', (req,res) =>{
    res.send('hej')
})

//creating a new article
router.get('/new', (req, res)=> {
    res.render('newArticle', {})
})


//editing a article
router.get('/:slug')

//show a specific article by the id
router.get('/:id', (req,res)=>{

    res.render('article')
})

//for posting the article to the database
router.post('/', async (req, res) => {
    const article = new Article( {
        title: req.body.title,
        minRead: req.body.minRead,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        await article.save()
        res.redirect('/article/'+ article.id) 
    } catch (error) {
        res.render('newArticle', {article: article})
    }   
})


module.exports = router;