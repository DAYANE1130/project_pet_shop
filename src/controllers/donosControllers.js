const donosServices = require('../services/donosServices');

const OK = 200;
 const NOTFOUND = 404;

const create = async (req, res) => {
  const data = req.body;
  const newDono = await donosServices.create(data);
  return res.status(OK).json(newDono);
};

const getAll = async (req, res) => {
  const donos = await donosServices.getAll();
  return res.status(OK).json(donos);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const dono = await donosServices.getById(id);
  if (!dono) return res.status(NOTFOUND).json({ message: 'Dono not found' });
  return res.status(OK).json(dono);
  };

  const remove = async (req, res) => {
    const { id } = req.params;
    const donoDeleted = await donosServices.remove(Number(id));
    if (!donoDeleted) return res.status(NOTFOUND).json({ message: 'Dono not found' });
    return res.status(OK).json({ message: 'Dono successfully deleted' });
    };
    
module.exports = { create, getAll, getById, remove };