const express = require('express');
const authController = require('../../../controllers/authController');

const router = express.Router();

router.post('/auth/login', authController.login);
router.post('/auth/signup', authController.signup);
router.post('/auth/verify-otp', authController.verifyLoginOtp);

module.exports = router;