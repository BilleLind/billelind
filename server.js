const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
var path = require('path');

var port = process.env.PORT || '8000'

var homeRouter = require('./routes/home');
var testerRouter = require('./routes/test');

app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

//app.use(express.static(path.join(__dirname, 'folder'))) not sure if i need to have a static "folder"

app.use('/', homeRouter);
app.use('/test', testerRouter);



app.listen(port, () => {
    console.log('Server is starting at port', port);
})

module.exports = app;