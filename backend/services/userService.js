var express = require("express");
var jwt = require("jwt-simple");

var router = express.Router();

var User = require("../models/user");

router.post("/register", (request, response) => {
  var user = new User(request.body);
  user.save((error, result) => {
    if (error) {
      console.log("error Saving user Data");
      return response.sendStatus(500).send({ message: error });
    }
    return response.sendStatus(201).send({message:'Created'});
  });
});

router.post("/login", async (request, response) => {
  var userData = request.body;
  var user = await User.findOne({ email: userData.email });
  if (!user) {
    return response.status(401).send({ message: "Email or Password is valid" });
  }

  if (userData.password != user.password) {
    return response.status(401).send({ message: "Email or Password is valid" });
  }

  var payload = {};
  var token = jwt.encode(payload, "54321");
  return response.status(200).send({ token });
});

var user = { router };

module.exports = user;
