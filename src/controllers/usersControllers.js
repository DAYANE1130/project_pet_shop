const { StatusCodes } = require('http-status-codes');
const userServices = require('../services/usersServices');

const create = async (req, res) => {
  const user = await userServices.create(req.body);
  res.status(StatusCodes.OK).json(user);
};

module.exports = { create };