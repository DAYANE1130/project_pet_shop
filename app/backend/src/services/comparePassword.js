const bcrypt = require('bcrypt');

const comparePassword = (passwordPayload, passwordDb) => {
  const compare = bcrypt.compareSync(passwordPayload, passwordDb);
  return compare;
};

module.exports = { comparePassword };