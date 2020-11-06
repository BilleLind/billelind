const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
var path = require('path');

var port = process.env.PORT || '8000'

var homeRouter = require('./routes/home');
var testerRouter = require('./routes/test');
var batRouter = require('./routes/bat');

app.engine('.hbs', exhbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'static'))) 

app.use('/', homeRouter);
app.use('/test', testerRouter);
app.use('/bat', batRouter);



app.listen(port, () => {
    console.log('Server is starting at port', port);
})

module.exports = app;