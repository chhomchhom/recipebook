/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser')

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recipebook"
});

//registration function
app.post('/register', function(req, res){

    //need to add to database
    var username1 = req.body.username
    var email1 = req.body.email
    var password1 = req.body.psw
    console.log(username1, email1, password1)
    con.connect(function(err) {
        if (err) throw err;
        else{
          console.log("before insert")
          var sql = "INSERT INTO users (username, email, password) VALUES ('" + username1 + "', '" + email1 + "', '" + password1 + "')";
          con.query(sql, function (err, result) {
            if (err) throw err;
        });
        console.log("after insert")
      }
    });
    res.redirect('/')
})

//registration function
app.post('/register', function(req, res){
    //need to add to database
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

      });
    res.redirect('/')
})
app.post('/login', function(req, res){
    //need to add to database
    res.redirect('/')
})

app.get('/', function(req, res){
  console.log("Ok we are here")
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
app.get('/recipeView',function(req,res){
  res.render('recipeView');
});
app.get('/addRecipe',function(req,res){
  res.render('addRecipe');
});

app.post('/addRecipe',function(req,res){

});

var appEnv = cfenv.getAppEnv();


// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
