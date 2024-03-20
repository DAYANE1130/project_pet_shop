const connection = require('./connection');

const loginUser = async (email) => {
  const query = 'SELECT * FROM pet_shop.users WHERE email=?';
  const [[user]] = await connection.execute(query, [email]);
  return user;
};

module.exports = { loginUser };