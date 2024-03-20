const getKeysAndValues = async (body) => {
  let dataBody = body;
  const keysBody = Object.keys(body);
  const values = Object.values(body);
  const keys = keysBody.map((campo) => `${campo}=?`);
  dataBody = { keys, values };
  return dataBody;
};

module.exports = { getKeysAndValues };