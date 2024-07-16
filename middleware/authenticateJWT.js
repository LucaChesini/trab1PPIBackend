const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.JWT_SECRET;

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, usuario) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.usuario = usuario;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const authorizeAdmin = (req, res, next) => {
    if (req.usuario.role !== 'admin') {
        return res.sendStatus(403);
    }
    next();
};

module.exports = {authenticateJWT, authorizeAdmin};
