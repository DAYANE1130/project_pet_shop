const jwt = require('jsonwebtoken');

const generateToken = (data) => {
  const secret = process.env.JWT_SECRET;
  const jwtConfig = {
    expiresIn: '30d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

module.exports = { generateToken };