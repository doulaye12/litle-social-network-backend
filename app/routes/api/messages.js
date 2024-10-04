const express = require('express');
const messagesController = require("../../controllers/messagesController");
const authMiddleware = require("../../../middlewares/authMiddleware");
const router = express.Router();

router.get('/messages/:id', authMiddleware, messagesController.getMessageById);
router.get('/messages', authMiddleware, messagesController.getAllMessages);
router.post('/messages', authMiddleware, messagesController.createMessage);

module.exports = router;
