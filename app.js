const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const FILE_PATH = path.join(__dirname, "messages.json");

// Ensure messages.json file exists
if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Serve Pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")));
app.get("/chat", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")));
app.get("/contactus", (req, res) => res.sendFile(path.join(__dirname, "views", "contact.html")));
app.get("/success", (req, res) => res.sendFile(path.join(__dirname, "views", "success.html")));

// Save a message
app.post("/message", (req, res) => {
    const { username, message } = req.body;
    if (!username || !message) return res.status(400).json({ error: "Username and message required" });

    const messages = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
    messages.push({ username, message });
    fs.writeFileSync(FILE_PATH, JSON.stringify(messages, null, 2));

    res.json({ success: true, message: "Message saved!" });
});

// Handle 404 - Page Not Found
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Start the server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
