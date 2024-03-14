const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// CREATE USER
exports.post_register = async (request, response) => {
  try {
    let user = await User.findOne({
      email: request.body.email,
    });

    if (user) {
      response.status(400).send("Email already exist");
      return;
    }

    if (request.body.password !== request.body.confirmpassword) {
      response.status(400).send("Parolalar uyusmuor");
      return;
    }

    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    const newUser = new User({
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      username: request.body.username,
      email: request.body.email,
      password: hashedPassword,
    });

    const createdUser = await newUser.save();

    response.send(createdUser);
  } catch (error) {
    console.log("error:", error);
  }
};

// UPDATE PROFILE
exports.update_profile = async (request, response) => {
  const userId = request.params.id;

  try {
    const user = await User.findOne({
      _id: userId,
    });

    if (!user) {
      response.status(404).send("User not found");
      return;
    }

    user.firstname = request.body.firstname;
    user.lastname = request.body.lastname;
    user.email = request.body.email;
    user.city = request.body.city;
    user.town = request.body.town;
    user.adress = request.body.adress;

    const updatedUser = await user.save();

    response.send(updatedUser);
  } catch (error) {
    response.status(400).send(error);
  }
};

// GET PROFILE
exports.get_profile = async (request, response) => {
  try {
    response.send("asfasdfasdfasdf");
  } catch (error) {
    response.status(400).send(error);
  }
};

// GET REGISTER
exports.get_register = async (request, response) => {
  response.send("Get Register Page");
};

// AUTHENTICATION
exports.post_login = async (request, response) => {
  try {
    let user = await User.findOne({
      username: request.body.username,
    });

    if (!user) {
      response.status(400).send("User does not exist");
      return;
    }

    const match = await bcrypt.compare(request.body.password, user.password);

    if (!match) {
      response.status(400).send("Username or password wrong");
    }

    const token = await user.createAuthToken();

    response.send(token);

  } catch (error) {
    console.log("error: ", error);
  }
};

// GET LOGIN
exports.get_login = async (request, response) => {
  response.send("Login Page");
};
