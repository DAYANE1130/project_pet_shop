const getKeysAndValues = async (body) => {
  let dataBody = body;
  const keysBody = Object.keys(body);
  const values = Object.values(body);
  const keys = keysBody.map((campo) => `${campo}=?`);
  dataBody = { keys, values };
  return dataBody;
};

const responseFormatedDono = async (array) => {
  const dataFormated = array.map((element) => {
    const { id, nome, email, telefone, rua, numero, cidade, estado, cep } = element;
    const personalData = { id, nome, email, telefone };
    const address = { rua, numero, cidade, estado, cep };
    return { ...personalData, address };
  });
  return dataFormated;
};

module.exports = { getKeysAndValues, responseFormatedDono };