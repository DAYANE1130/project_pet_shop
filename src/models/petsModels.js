const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM pet_shop.pets';
  const [pets] = await connection.execute(query);
  return pets;
};

const getById = async (id) => {
  const query = 'SELECT * FROM pet_shop.pets WHERE id=?';
  const [[pet]] = await connection.execute(query, [id]);
  return pet;
};

const update = async (id, nome) => {
  const query = 'UPDATE  pet_shop.pets SET nome=? WHERE id=?';
  const [petUpdated] = await connection.execute(query, [nome, id]);
  return { id: petUpdated.insertId, nome };
};

const remove = async (id) => {
  const query = 'DELETE FROM pet_shop.pets WHERE id=?';
  const [petDeleted] = await connection.execute(query, [id]);
  return petDeleted;
};

module.exports = { getAll, getById, update, remove };