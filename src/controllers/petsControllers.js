const { StatusCodes } = require('http-status-codes');
const petsServices = require('../services/petsServices');

const create = async (req, res, next) => {
  const data = req.body;
  const newPet = await petsServices.create(data);
  if (!newPet) return next({ status: StatusCodes.BAD_REQUEST, message: 'Dono not found' });
  return res.status(StatusCodes.OK).json(newPet);
};

const getAll = async (req, res) => {
  const pets = await petsServices.getAll();
  return res.status(StatusCodes.OK).json(pets);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const pet = await petsServices.getById(id);
  if (!pet) return next({ status: StatusCodes.NOT_FOUND, message: 'Dono not found' });
  return res.status(StatusCodes.OK).json(pet);
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const petEdited = await petsServices.update(Number(id), req.body);
  if (!petEdited) return next({ status: StatusCodes.NOT_FOUND, message: 'Dono not found' });
  return res.status(StatusCodes.OK).json(petEdited);
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  const petDeleted = await petsServices.remove(Number(id));
  if (!petDeleted) return next({ status: StatusCodes.NOT_FOUND, message: 'Dono not found' });
  return res.status(StatusCodes.OK).json({ message: ' Pet successfully deleted ' });
};

module.exports = { create, getAll, getById, update, remove };