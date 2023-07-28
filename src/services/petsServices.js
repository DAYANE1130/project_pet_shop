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

const update = async (id, nome) => {
  const findPet = await getById(id);
  if (!findPet) return false;
  const petUpdated = await petsModels.update(id, nome);
  return petUpdated;
};

module.exports = { getAll, getById, update };