var http= require('http');

var ejsLayouts=require('express-ejs-layouts');
var express=require('express');
var path=require('path');
var app=express();

var db = require('./app_server/models/db');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './app_server/views'));

app.use(ejsLayouts);
app.use('/public', express.static(path.join(__dirname, 'public')));

require('./app_server/routes/routeManager')(app);

//var Urun = mongoose.model('urun', urunSchema);







app.listen(8001);

