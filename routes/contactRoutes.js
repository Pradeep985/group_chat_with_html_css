const express = require("express");
const ContactController = require("../controllers/contactController");

const router = express.Router();

router.post("/", ContactController.saveContact);

module.exports = router;
