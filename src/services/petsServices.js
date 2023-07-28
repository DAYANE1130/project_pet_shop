const petsModels = require('../models/petsModels');

const getAll = async () => {
  const pets = await petsModels.getAll();
  return pets;
};

const getById = async (id) => {
  if (!id) return false;
  const pet = await petsModels.getById(id);
  return pet;
};

module.exports = { getAll, getById };