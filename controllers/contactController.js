const ContactModel = require("../models/ContactModel");

class ContactController {
    static async saveContact(req, res) {
        const { name, email } = req.body;
    
        const success = await ContactModel.saveContact(name, email);
        if (success) {
            res.redirect("/success");
        } else {
            res.status(500).json({ error: "Failed to submit form" });
        }
    }
}

module.exports = ContactController;
