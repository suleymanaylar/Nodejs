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

var user = { router ,chechAuthenticated:(request,response,next)=>{
  if (!request.header('authorization')) {
    return response.status(401).send({message:'Unauthorized. No Authorization headers'})
  }
  var token=request.header("authorization").split(' ')[1];
  var payload=jwt.decode(token,"54321")

  if (!payload) {
    return response.status(401).send({message:"Unauthorized.Token is not valid"})
  }
 
  next()
}};

module.exports = user;
