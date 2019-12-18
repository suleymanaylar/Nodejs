var express = require("express");
var router = express.Router();

var User = require("../models/user");

router.post("/register", (request, response) => {
  var user = new User(request.body);
  user.save((error, result) => {
    if (error) {
      console.log("error Saving user Data");
      return response.sendStatus(500).send({ message: error });
    }
    return response.sendStatus(201);
  });
});

router.post("/login", async (request, response) => {
  var userData = request.body;
  var user = await User.findOne({ email: userData.email });
  if (!user) {
    return response.status(401).send({ message: "Email or Password is valid" });
  }
  if (userDate.password != user.password) {
    return response.status(401).send({ message: "Email or Password is valid" });
  }

  return response.status(200);
});

var user = { router };

module.exports = user;
