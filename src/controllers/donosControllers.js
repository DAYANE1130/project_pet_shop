const donosServices = require('../services/donosServices');

const OK = 200;
// const NOTFOUND = 404;

const create = async (req, res) => {
  const data = req.body;
  const newDono = await donosServices.create(data);
  return res.status(OK).json(newDono);
};

module.exports = { create };