const connection = require('./connection');

const create = async (data) => {
  const { tipo, nome, idade, raca } = data;
  const { dono_id: donoId } = data;
  const query = 'INSERT INTO pet_shop.pets(dono_id, tipo, nome, idade, raca) VALUES (?,?,?,?,?)';
  const [{ insertId }] = await connection.execute(query, [donoId, tipo, nome, idade, raca]);
  return { insertId, ...data };
};

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
const update = async (id, body) => {
  const query = `UPDATE pet_shop.pets SET ${body.keys} WHERE id=?`;
  const [petUpdated] = await connection.execute(query, [...body.values, id]);
  return { id: petUpdated.insertId, updatedData: body.values };
};

const remove = async (id) => {
  const query = 'DELETE FROM pet_shop.pets WHERE id=?';
  const [petDeleted] = await connection.execute(query, [id]);
  return petDeleted;
};

module.exports = { create, getAll, getById, update, remove };