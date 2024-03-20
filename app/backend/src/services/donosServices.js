const donosModels = require('../models/donosModels.js');

const { getKeysAndValues } = require('../utils/dataUtils.js');
const { responseFormatedDono } = require('../utils/responseUtils.js.js');

const isEmailRegistered = async (email) => {
  const user = await donosModels.getByEmail(email);
  if (!user || user.length === 0) return false;
  return true;
};

const create = async (data) => {
  const { email } = data;
  const checkIfOwnerExists = await isEmailRegistered(email);
  if (checkIfOwnerExists) return false;
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