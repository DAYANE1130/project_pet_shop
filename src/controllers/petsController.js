const petsServices = require('../services/petsServices');

const OK = 200;

const getAll = async (req, res) => {
  const pets = await petsServices.getAll();
  res.status(OK).json(pets);
};

module.exports = { getAll };