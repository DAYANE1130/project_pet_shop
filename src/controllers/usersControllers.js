const userServices = require('../services/usersServices');

const OK = 200;

const create = async (req, res) => {
  const user = await userServices.create(req.body);
  res.status(OK).json(user);
};

module.exports = { create };