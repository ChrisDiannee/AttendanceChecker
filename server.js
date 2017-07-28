//server.js
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/login.html'));
});
app.get('/home.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/home.html'));
});
app.get('/login.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/login.html'));
});
app.get('/logout.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/logout.html'));
});
app.get('/editprofileform.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/editprofileform.html'));
});


//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});