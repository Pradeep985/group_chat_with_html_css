const express = require("express");
const bodyParser = require("body-parser");

// Import Controllers
const MessageController = require("./controllers/messageController");
const ContactController = require("./controllers/contactController");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(__dirname + "/views/login.html"));
app.get("/chat", (req, res) => res.sendFile(__dirname + "/views/index.html"));
app.get("/contactus", (req, res) => res.sendFile(__dirname + "/views/contact.html"));
app.get("/success", (req, res) => res.sendFile(__dirname + "/views/success.html"));

app.post("/message", MessageController.saveMessage);
app.post("/contactus", ContactController.saveContact);

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});

app.listen(PORT);
