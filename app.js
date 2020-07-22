const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

//actual code

app.get("/", function(req, res){

  var today = new Date();

  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    thisDay: day
  });

});


// starting server code
app.listen(3000, function(){
  console.log("Server has started");
});
