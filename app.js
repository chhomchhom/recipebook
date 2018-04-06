/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application
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
con.connect(function(err) {
    if (err) throw err;
    console.log("connected")
});

/////////////////////////////////Posts//////////////////////////////////////////
//method will register users to the database
app.post('/register', function(req, res){
    //need to add to database
    var username1 = req.body.username
    var email1 = req.body.email
    var password1 = req.body.psw
//check to see if the email inputted is already in the database
    con.query("SELECT * FROM users where email = '" + email1 + "'", function (err, result){
      if (err) throw err;
      console.log("result is: "+result)
      //check if user inputted email exists in database
      if(result ==0){
        var sql = "INSERT INTO users (username, email, password) VALUES ('" + username1 + "', '" + email1 + "', '" + password1 + "')";
        con.query(sql, function (err, result) {
          //check if there was an error with inserting
          //specifically an error will occur if the username already exist in database
          if(err){
            console.log("username already registered");
            res.render('signup',{
              taken: true
            })
            //if everything all works and we insert into database
            //redirect to main page
          }else{
            if (err) throw err;
            res.redirect('/')
          }
      });
      }
      // email exists also
      else{
        console.log("email already registered");
        res.render('signup',{
          taken: true
        })
      }
  });
})


//method will login a user
app.post('/login', function(req, res){
    //need to add to database
  var email = req.body.email
  var username
  //check if email exists in the database
  con.query("SELECT username FROM users where email = '" + email + "'", function (err, result){
    if (err) throw err;

    if(result == 0){
      res.render('login',{
        user: true
      });
    }
    else {
      console.log(result[0].username)
      res.render('main',{
        user: false, result: result

      });
    }
    });
});

//add a recipe to the database
app.post('/addRecipe',function(req,res){
  //grab the values from the input boxes
  //from the addRecipe.pug view
  var title = req.body.Title
  var description = req.body.Description
  var steps = req.body.Steps
  var ingredients = req.body.Ingredients
  var image = req.body.Image
  //insert into the database
  var sql = "INSERT INTO recipes (title, description, ingredients, steps, image) VALUES ('" + title + "', '" + description+ "', '" +ingredients + "', '" +steps + "', '" +image + "')";
  con.query(sql, function (err, result) {
    if (err) throw err;
  });
      console.log("recipe added")
  res.redirect('/')

});

//////////////////////////////////////////////get///////////////////////////////

//redirect to test.pug
app.get('/test', function(req, res){
  res.render('test');
})
//redirect to main.pug
app.get('/', function(req, res){
  console.log("Ok we are here")
  res.render('main');
})
//redirect to favourite.pug
app.get('/favourite', function(req, res){
  res.render('favourite');
})
//redirect to discover.pug
app.get('/discover',function(req,res){
  res.render('discover');
});
//redirect to signup.pug
app.get('/signup',function(req,res){
  res.render('signup');
});
//redirect to login.pug
app.get('/login',function(req,res){
  res.render('login');
});
//redirect to addRecipe.pug
app.get('/addRecipe',function(req,res){
    res.render('addRecipe');
});
//redirect to recipeView
//will load the info of the recipe from the database
// and display all of its attribute in one page
app.get('/recipeView/:recipeID',function(req,res){
  var recipeID = req.params.recipeID
  //Parse sql with recipeID
  con.query("SELECT * FROM recipes WHERE id = '" + recipeID + "'",function(err,result){
    console.log("result: "+result)
    if(result==0){
      console.log("is 0");
    }
    res.render('recipeView', {result:result});
  })
});

var appEnv = cfenv.getAppEnv();
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
