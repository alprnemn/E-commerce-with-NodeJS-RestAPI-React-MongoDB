const express = require("express");
const router = express.Router();

// Controllers
const userController = require("../controller/userController");


// Routes
router.put("/profile/:id",userController.update_profile); // UPDATE PROFILE
router.get("/profile/:id",userController.get_profile); // GET PROFILE USER
router.post("/register",userController.post_register); // CREATE USER
router.get("/register",userController.get_register); // GET Register Page
router.post("/login",userController.post_login); // AUTHENTICATION
router.get("/login",userController.get_login); // GET Login Page


module.exports = router;