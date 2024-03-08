const userController = require('../Controllers/UserController');
const express = require('express');
const router = express.Router();
const authController = require('../Controllers/AuthController');


// router.route('/').post(userController.createUser);
// .get(userController.getAllUsers)

router.post('/signup', authController.SignUp);
router.post('/login', authController.login);

router.route('/:id').get(userController.getUser)
router.route('/forgetPassword').post(authController.forgetPassword);
// .patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;