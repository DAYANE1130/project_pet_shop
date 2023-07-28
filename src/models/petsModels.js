const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM pet_shop.pets';
  const [pets] = await connection.execute(query);
  return pets;
};

const getById = async (id) => {
  const query = 'SELECT * FROM pet_shop.pets WHERE id=?';
  const [[pet]] = await connection.execute(query, [id]);
  console.log(pet);
  return pet;
};

const update = async (id, nome) => {
  const query = 'UPDATE  pet_shop.pets SET nome=? WHERE id=?';
  const [petUpdated] = await connection.execute(query, [id, nome]);
  return { id: petUpdated.insertId, nome };
};

module.exports = { getAll, getById, update };