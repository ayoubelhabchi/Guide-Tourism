const express = require('express')
const router = express.Router()
const authController = require("../controllers/AuthController")

router.post('/register', authController.createUser);
router.get('/register/confirm/:token', authController.emailConfirm)
router.post('/password-forget', authController.forgetPassword)
router.post('/rest-password/:token', authController.restPassword)
router.post('/login', authController.login);

module.exports = router;
