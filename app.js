/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var path = require('path');
var mysql = require('mysql');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https: //www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
//var app = express();
let app = express();

app.set("view engine", "pug");
// serve the files out of ./public as our main files
//app.use(express.static(path.join(__dirname, 'public')))
//app.set('views', express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static(__dirname + '/public'));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users"
});

//registration function
app.post('/register', function(req, res){
    //need to add to database
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

      });
    res.redirect('main')
})
app.post('/login', function(req, res){
    //need to add to database

    res.redirect('main')
})

app.get('/', function(req, res){
  res.render('main');
})
app.get('/main', function(req, res){
  res.render('main');
})

app.get('/favourite', function(req, res){
  res.render('favourite');
})

app.get('/discover',function(req,res){
  res.render('discover');
});

app.get('/signup',function(req,res){
  res.render('signup');
});

app.get('/login',function(req,res){
  res.render('login');
});

var appEnv = cfenv.getAppEnv();


// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
