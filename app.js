const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

const contactRoutes = require("./routes/contactRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use("/contactus", contactRoutes);
app.use("/message", messageRoutes);

app.get("/", (req, res) => res.sendFile(__dirname + "/views/login.html"));
app.get("/chat", (req, res) => res.sendFile(__dirname + "/views/index.html"));
app.get("/success", (req, res) => res.sendFile(__dirname + "/views/success.html"));

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});

app.listen(PORT);
