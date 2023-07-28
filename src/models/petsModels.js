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

module.exports = { getAll, getById };