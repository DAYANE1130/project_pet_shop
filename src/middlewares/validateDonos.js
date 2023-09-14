const { StatusCodes } = require('http-status-codes');
const { verifyDataIsString, verifyFieldsIsNotBlank } = require('../utils');

const errors = {
  fieldsIsNotStrings: 'fields  must be a strings',
  fieldsIsNotNumbers: '"numero" must be a number  ',
  fieldsIsBlank: 'Attributes are missing',
};

const validateFields = (req, _res, next) => {
  const { nome, email, telefone, rua, numero, cidade, estado, cep } = req.body;
  const fields = [nome, email, telefone, rua, numero, cidade, estado, cep];
  if (verifyFieldsIsNotBlank(fields)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsBlank });
  }
  next();
};

const validateDataType = (req, _res, next) => {
  const { nome, email, telefone, rua, numero, cidade, estado, cep } = req.body;
  const fieldsStrings = [nome, email, telefone, rua, cidade, estado, cep];
  if (!verifyDataIsString(fieldsStrings)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsNotStrings });
  }
  if (typeof numero !== 'number') {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsNotNumbers });
  }
  next();
};

module.exports = { validateFields, validateDataType };