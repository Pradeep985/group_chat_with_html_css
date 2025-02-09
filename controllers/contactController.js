const path = require("path");

exports.showContactPage = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/contact.html"));
};
