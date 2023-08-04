const donosModels = require('../models/donosModels');
const { responseFormatedDono } = require('../utils');

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

module.exports = { create, getAll, getById };