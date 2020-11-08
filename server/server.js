const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
var path = require('path');

var port = process.env.PORT || '8000'

//router file location
var homeRouter = require('./routes/home');
var testerRouter = require('./routes/test');
var batRouter = require('./routes/bat');

//setting up the templating engine
app.engine('.hbs', exhbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Creating a static folder for css, js and test
app.use(express.static(path.join(__dirname, 'static'))) 


//connection the router to the path
app.use('/', homeRouter);
app.use('/test', testerRouter);
app.use('/bat', batRouter);



app.listen(port, () => {
    console.log('Server is starting at port', port);
})

module.exports = app;