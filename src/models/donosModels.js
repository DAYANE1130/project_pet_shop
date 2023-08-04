const connection = require('./connection');

const create = async (data) => {
  const { nome, email, telefone, rua, numero, cidade, estado, cep } = data;
  const bodyData = [nome, email, telefone, rua, numero, cidade, estado, cep];
  const query = 'INSERT INTO pet_shop.donos(nome, email,telefone,rua,numero,cidade,estado,cep)'
    + 'VALUES(?,?,?,?,?,?,?,?)';
  const [{ insertId }] = await connection.execute(query, [...bodyData]);
  return { id: insertId, ...data };
};

module.exports = { create };