//import libraries
const db = require('../db.js');
const SQL = require('sql-template-strings');
const jwt = require('jsonwebtoken');
const { jwtTokens } = require('../utils/jwt-helpers.js');
//const { request } = require('express');

//function to verify user info for login
const getUserId = (request, response) => {
    //get the parameters from the request
    const { username, password } = request.body;

    //check if the entered user info is valid
    db.query(
        SQL`SELECT * FROM user_info WHERE username = ${username} 
    and password = crypt(${password},password)`,
        (error, results) => {
            if (error) {
                response.status(401).json({ error: error.message });
            }
            //send error message if user does not exist
            if (results.rows.length < 1) {
                response
                    .status(400)
                    .json({ error: 'invalid username or password' });
                return;
            }

            const tokens = jwtTokens(username);
            response.cookie('refresh_token', tokens.refreshToken, {
                httpOnly: true,
            });

            //send user details if the login is successful
            response.status(200).json({
                id: results.rows[0].user_id,
                username: results.rows[0].username,
                accessToken: tokens.accessToken,
            });
        }
    );
};

//function to refresh token

const renewRefreshToken = (request, response) => {
    //const { username} = request.body;

    try {
        const refToken = request.cookies.refresh_token;
        if (refToken === null)
            return response.status(401).json({ error: 'Null refresh Token' });
        jwt.verify(
            refToken,
            process.env.REFRESH_TOKEN_SECRET,
            (error, user) => {
                if (error)
                    return response.status(403).json({ error: error.message });

                const tokens = jwtTokens(user);
                response.cookie('refresh_token', tokens.refreshToken, {
                    httpOnly: true,
                });

                //send user details if the refresh token is successful
                response.status(200).json(tokens);
            }
        );
    } catch (error) {
        return response.status(401).json({ error: error.message });
    }
};

const deleteRefreshToken = (request, response) => {
    try {
        response.clearCookie('refresh_token');
        return response.status(200).json({ message: 'refresh token deleted.' });
    } catch (error) {
        return response.status(401).json({ error: error.message });
    }
};

//export the function
module.exports = { getUserId, renewRefreshToken, deleteRefreshToken };
