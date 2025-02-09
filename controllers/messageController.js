const MessageModel = require("../models/MessageModel");

class MessageController {
    static async saveMessage(req, res) {
        const { username, message } = req.body;
        
        const success = await MessageModel.saveMessage(username, message);
        if (success) {
            res.json({ success: true, message: "Message saved!" });
        } else {
            res.status(500).json({ error: "Failed to save message" });
        }
    }
}

module.exports = MessageController;
