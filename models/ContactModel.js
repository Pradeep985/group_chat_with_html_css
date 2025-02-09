const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "../contacts.json");

if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([]));

class ContactModel {
    static async saveContact(name, email) {
        try {
            const contacts = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
            contacts.push({ name, email });
            fs.writeFileSync(FILE_PATH, JSON.stringify(contacts, null, 2));
            return true;
        } catch (error) {
            console.error("Error saving contact:", error);
            return false;
        }
    }
}

module.exports = ContactModel;
