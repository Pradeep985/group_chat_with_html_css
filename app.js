const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const contactController = require("./controllers/contactController");
const successController = require("./controllers/successController");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); 


app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")));
app.get("/chat", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")));
app.get("/contactus", contactController.showContactPage);
app.get("/success", successController.showSuccessPage);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT);
