const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const validateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  const secret = process.env.JWT_SECRET;

  if (!token) return res.status({ status: StatusCodes.UNAUTHORIZED, message: 'Token not found' });
  try {
    const decodedToken = jwt.verify(token, secret);
    req.payload = decodedToken;
    next();
  } catch (error) {
    return res.status({ status: StatusCodes.UNAUTHORIZED, message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };
