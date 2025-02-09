const path = require("path");

exports.showSuccessPage = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/success.html"));
};
