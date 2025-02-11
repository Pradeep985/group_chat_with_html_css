const express = require("express");
const MessageController = require("../controllers/messageController");

const router = express.Router();

router.post("/", MessageController.saveMessage);

module.exports = router;
