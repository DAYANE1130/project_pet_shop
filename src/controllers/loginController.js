const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/loginServices');

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await loginService.loginUser(email, password);
  const { errorPassword } = user;
  // tratar erro
  // validando se o usuario enviar um -email que não existe
  if (!user) return next({ status: StatusCodes.BAD_REQUEST, message: 'User not found' });
  if (errorPassword) return next({ status: StatusCodes.BAD_REQUEST, message: 'Error password' });
  return res.status(StatusCodes.OK).json(user);
};

module.exports = { loginUser };