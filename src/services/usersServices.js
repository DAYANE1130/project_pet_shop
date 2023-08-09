const usersModels = require('../models/usersModels');

const create = async (data) => {
  const user = await usersModels.create(data);
  return user;
};

module.exports = { create };