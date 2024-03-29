const jwt = require('jsonwebtoken');

function authenticateToken(request, response, next) {
    const authHeader = request.headers['authorization']; //Bearer  Token

    const token = authHeader && authHeader.split(' ')[1];

    if (token == null)
        return response.status(401).json({ error: 'Null Token' });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) return response.status(403).json({ error: error.message });
        request.user = user;
        next();
    });
}

module.exports = {
    authenticateToken,
};
