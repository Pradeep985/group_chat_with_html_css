const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "../messages.json");

if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([]));

class MessageModel {
    static async saveMessage(username, message) {
        try {
            const messages = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
            messages.push({ username, message });
            fs.writeFileSync(FILE_PATH, JSON.stringify(messages, null, 2));
            return true;
        } catch (error) {
            console.error("Error saving message:", error);
            return false;
        }
    }
}

module.exports = MessageModel;
