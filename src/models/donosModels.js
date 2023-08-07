const connection = require('./connection');

const create = async (data) => {
  const { nome, email, telefone, rua, numero, cidade, estado, cep } = data;
  const bodyData = [nome, email, telefone, rua, numero, cidade, estado, cep];
  const fields = 'nome, email,telefone,rua,numero,cidade,estado,cep';
  const query = `INSERT INTO pet_shop.donos(${fields}) VALUES(?,?,?,?,?,?,?,?)`;
  const [{ insertId }] = await connection.execute(query, [...bodyData]);
  return { id: insertId, ...data };
};

const getAll = async () => {
  const query = 'SELECT * FROM pet_shop.donos';
  const [donos] = await connection.execute(query);
  return donos;
};

const getById = async (id) => {
  const query = 'SELECT * FROM pet_shop.donos WHERE id=?';
  const [dono] = await connection.execute(query, [id]);
  return dono;
};

const update = async (id, body) => {
  const query = `UPDATE pet_shop.donos SET ${body.keys} WHERE id=?`;
  const [{ insertId }] = await connection.execute(query, [...body.values, id]);
  return { insertId, updatedData: body.values };
};

const remove = async (id) => {
  const query = 'DELETE FROM pet_shop.donos WHERE id=?';
  const [donoDeleted] = await connection.execute(query, [id]);
  return donoDeleted;
};

module.exports = { create, getAll, getById, update, remove };