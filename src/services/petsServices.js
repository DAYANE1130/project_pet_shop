const petsModels = require('../models/petsModels');
const donosModels = require('../models/donosModels');
const { getKeysAndValues } = require('../utils');

const create = async (data) => {
  const { dono_id: donoId } = data;
  const dono = await donosModels.getById(donoId);
  if (dono.length === 0) return false;
  const newPet = await petsModels.create(data);
  return newPet;
};

const getAll = async () => {
  const pets = await petsModels.getAll();
  return pets;
};

const getById = async (id) => {
  if (!id) return false;
  const pet = await petsModels.getById(id);
  return pet;
};

const update = async (id, body) => {
  const findPet = await getById(id);
  if (!findPet) return false;
  const bodyPet = await getKeysAndValues(body);
  const petEdited = await petsModels.update(id, bodyPet);
  return petEdited;
};

const remove = async (id) => {
  const findPet = await getById(id);
  if (!findPet) return false;
  const petDeleted = await petsModels.remove(id);
  return petDeleted;
};

module.exports = { create, getAll, getById, update, remove };