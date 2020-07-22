const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

//actual code

  var newTasksApp = ["Meditation", "Coding","Workout"];

app.get("/", function(req, res){

  var today = new Date();

  var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    thisDay: day,
    newItemList: newTasksApp
  });

});

app.post("/", function (req, res) {
  newTasksApp.push(req.body.newTaskInput);
  res.redirect("/");
});




// starting server code
app.listen(4000, function(){
  console.log("Server has started");
});
