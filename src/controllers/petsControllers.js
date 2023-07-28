const petsServices = require('../services/petsServices');

const OK = 200;
const NOTFOUND = 404;

const getAll = async (req, res) => {
  const pets = await petsServices.getAll();
  return res.status(OK).json(pets);
};

const getById = async (req, res) => {
  const { id } = req.params; // cliente envia pela url da pesquisa
  const pet = await petsServices.getById(id);
  if (!pet) return res.status(NOTFOUND).json({ message: 'Pet not found' });
  return res.status(OK).json(pet);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const petUpdated = await petsServices.update(id, nome);
  if (!petUpdated) return res.status(NOTFOUND).json({ message: 'Pet not found' });
  return res.status(OK).json(petUpdated);
};

module.exports = { getAll, getById, update };