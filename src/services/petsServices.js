const petsModels = require('../models/petsModels');

const getAll = async () => {
  const pets = await petsModels.getAll();
  return pets;
};

module.exports = { getAll };