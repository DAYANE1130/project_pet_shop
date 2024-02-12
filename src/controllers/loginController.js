const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/loginServices');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.loginUser(email, password);
  // tratar erro
  return res.status(StatusCodes.OK).json(user);
};

module.exports = { loginUser };