const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM pet_shop.pets';
  const [pets] = await connection.execute(query);
  return pets;
};

module.exports = { getAll };