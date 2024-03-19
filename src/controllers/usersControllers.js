const { StatusCodes } = require('http-status-codes');
const userServices = require('../services/usersServices');

const create = async (req, res, next) => {
  const user = await userServices.create(req.body);
  if (!user) return next({ status: StatusCodes.BAD_REQUEST, message: 'Email already registered' });
  res.status(StatusCodes.OK).json({ status: 'Sucessfull user', user });
};

module.exports = { create };