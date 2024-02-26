const loginModels = require('../models/loginModels');
const comparePassword = require('./comparePassword');
const jwt = require('../utils/auth');

const loginUser = async (email, password) => {
  if (!email || !password) return false;

  const user = await loginModels.loginUser(email);

  if (!user) return false;

  const compare = comparePassword.comparePassword(password, user.password);

  if (!compare) return { errorPassword: 'error' };

  const token = jwt.generateToken(email);

  return token;
};

module.exports = { loginUser };