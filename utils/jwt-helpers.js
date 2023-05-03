const jwt = require('jsonwebtoken');

function jwtTokens({ username }) {
    const accessToken = jwt.sign(
        { username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: 86400 }
    );
    const refreshToken = jwt.sign(
        { username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '7d' }
    );

    return { accessToken, refreshToken };
}

module.exports = {
    jwtTokens,
};
