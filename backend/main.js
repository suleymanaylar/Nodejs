var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

var Author = require("./models/author");
var User = require("./models/user");

var author = require("./services/authorService");
var user = require("./services/userService");

var app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://test:12345@cluster0-nov9b.mongodb.net/test?retryWrites=true&w=majority",
  error => {
    if (!error) {
      console.log("connected to db");
    }
  }
);

app.use(cors());
app.use("/author", author.router);
app.use('/user',user.router)
app.listen(8080);
