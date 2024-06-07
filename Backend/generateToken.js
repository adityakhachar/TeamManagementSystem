const jwt = require('jsonwebtoken');
const jwtSecret = "MyNameIsAdityaKhachar";

function generateToken(user) {
    const payload = {
        user: {
            id: user.id,
            companyName: user.companyName // Include companyName in the token payload
        }
    };

    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
}

module.exports = generateToken;
