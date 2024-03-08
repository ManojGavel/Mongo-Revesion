const express = require("express");
const router = express.Router();
const authController = require("./../Controllers/AuthController");


router.route('/signup').post(authController.SignUp);


module.exports = router;