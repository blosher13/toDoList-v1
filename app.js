const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

//actual code

app.get("/", function(req, res){

  var today = new Date();
  var day = "";

  switch (today.getDay()) {
    case 0:
    day = "Sunday";
      break;

    case 1:
    day = "Monday";
      break;

    case 2:
    day = "Tuesday";
      break;

    case 3:
    day = "Wednesday";
      break;

    case 4:
    day = "Thursday";
      break;

    case 5:
    day = "Friday";
      break;

    case 6:
    day = "Saturday";
      break;

    case 7:
    day = "Saturday";
    break;

    default: console.log("Error has occured");

  };

  res.render("list", {thisDay: day});

});


// starting server code
app.listen(3000, function(){
  console.log("Server has started");
});
