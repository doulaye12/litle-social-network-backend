const express = require('express');
const userController = require('../../controllers/userController');
const authMiddleware = require("../../../middlewares/authMiddleware");

const router = express.Router();

router.get('/users/email/:email', authMiddleware, userController.getUserByEmail);
router.get('/users/:id', authMiddleware, userController.getUserById);
router.get('/users', authMiddleware, userController.getAllUsers);


module.exports = router;
