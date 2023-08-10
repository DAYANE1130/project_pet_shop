const { StatusCodes } = require('http-status-codes');
const donosServices = require('../services/donosServices');

const create = async (req, res) => {
  const data = req.body;
  const newDono = await donosServices.create(data);
  return res.status(StatusCodes.OK).json(newDono);
};

const getAll = async (req, res) => {
  const donos = await donosServices.getAll();
  return res.status(StatusCodes.OK).json(donos);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const dono = await donosServices.getById(id);
  if (!dono) return next({ status: StatusCodes.NOT_FOUND, message: 'Dono not found' });
  return res.status(StatusCodes.OK).json(dono);
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const donoUpdated = await donosServices.update(id, req.body);
  if (!donoUpdated) return next({ status: StatusCodes.NOT_FOUND, message: 'Dono not found' });
  res.status(StatusCodes.OK).json(donoUpdated);
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  const donoDeleted = await donosServices.remove(Number(id));
  if (!donoDeleted) return next({ status: StatusCodes.NOT_FOUND, message: 'Dono not found' });
  return res.status(StatusCodes.OK).json({ message: 'Dono successfully deleted' });
};

module.exports = { create, getAll, getById, update, remove };