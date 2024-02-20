const connection = require('./connection');

const loginUser = async (email) => {
  const query = 'SELECT * FROM pet_shop.users WHERE email=?';
  const [[user]] = await connection.execute(query, [email]);
  console.log(user); // fazer os commits com o conventional
  return user;
};

module.exports = { loginUser };