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
module.exports = { create, getAll };