require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const WithAuth = async (req, res) => {
    const token = req.header["authorization"]?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Não autorizado" });
    }
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Não autorizado" });

            req.email = decoded.email;
            next();
        }
        return res.status(200).json(decoded);
    });
}

module.exports = WithAuth;