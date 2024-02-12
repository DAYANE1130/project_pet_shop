const loginModels = require('../models/loginModels');

const loginUser = async (email, password) => {
  if (!email || !password) return false; // acho que isso deveria vir na validação
  // acho que a linha acima garante que vou consultar só se enviar algum dado , certo ?
  const user = await loginModels.loginUser(email); // usar find, isso é um array ?
  // a senha que o usuário enviou confere com a cadastrada no banco de dados ?
  // Não é necessário usar find para procurarmos , a consulta fpoi feita usando "where email ="
  // então vai retornar somente 1 user
  // O método find() retorna o valor do primeiro elemento do array que satisfizer 
 // if (user.password !== password) return false;

  return user; // retornando user paar efeito de teste , vou retornar um token JWT
};

module.exports = { loginUser };