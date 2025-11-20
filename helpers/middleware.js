import jwt from 'jsonwebtoken';

const validateToken = (req, res, next) => {
    const token = req.cookies._token;
    
    if (!token) {
        return res.status(401).json({
            message: 'Token missing',
            error: 'Token missing',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        return res.statis(401).json({
            message:  'Not valid token',
            error: error.message,
        });
    }
};

export default validateToken;