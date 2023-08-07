const donosModels = require('../models/donosModels');
const { responseFormatedDono } = require('../utils');
const { getKeysAndValues } = require('../utils');

const create = async (data) => {
  const newDono = await donosModels.create(data);
  return newDono;
};

const getAll = async () => {
  const donos = await donosModels.getAll();
  const dataDonos = responseFormatedDono(donos);
  return dataDonos;
};

const getById = async (id) => {
  const dono = await donosModels.getById(id);
  if (dono.length === 0) return false;
  const dataDono = responseFormatedDono(dono);
  return dataDono;
};

const update = async (id, body) => {
  const findDono = await getById(id);
  if (!findDono) return false;
  const bodyDono = await getKeysAndValues(body);
  const donoUpdated = await donosModels.update(id, bodyDono);
 return donoUpdated;
};

const remove = async (id) => {
  const findDono = await getById(id);
  if (!findDono) return false;
  const donoDeleted = await donosModels.remove(id);
  return donoDeleted;
};

module.exports = { create, getAll, getById, update, remove };