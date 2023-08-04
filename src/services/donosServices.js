const donosModels = require('../models/donosModels');
// const { responseFormatedDono } = require('../utils');

const create = async (data) => {
  const newDono = await donosModels.create(data);
  return newDono;
};

module.exports = { create };