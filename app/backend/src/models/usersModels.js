const connection = require('./connection');

const create = async (data) => {
  const { email, password } = data;
  const { first_name: firstName, last_name: lastName } = data;
  const fields = 'first_name, last_name, email, password, created_at, updated_at';
  const query = `INSERT INTO pet_shop.users(${fields}) VALUES(?,?,?,?,NOW(),NOW())`;
  const [{ insertId }] = await connection.execute(query, [firstName, lastName, email, password]);
  return { id: insertId, ...data };
};

module.exports = { create };