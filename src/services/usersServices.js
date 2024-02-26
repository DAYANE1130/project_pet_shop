const bcrypt = require('bcrypt');
const usersModels = require('../models/usersModels');

const create = async (data) => {
  const saltRounds = 10;
  const copyData = { ...data };
  const { password } = copyData; // extraindo password
  const hashedPassword = await bcrypt.hash(password, saltRounds); // fazendo hash da senha
  copyData.password = hashedPassword; // substitui a senha normal pela senha hashada
  const user = await usersModels.create(copyData);// passo a cópia do objeto com senha com hash
  delete user.password; // remove uma propriedade de um objeto
  return user; // IMPORTANTEcorrigir o retorno está voltando todas as info até a senha
};

module.exports = { create };