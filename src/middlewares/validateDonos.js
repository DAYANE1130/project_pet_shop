const { StatusCodes } = require('http-status-codes');
const { verifyDataIsString, verifyFieldsIsNotBlank, verifyFormatEmail } = require('../utils');

const errors = {
  fieldsIsNotStrings: 'fields  must be a strings',
  fieldsIsNotNumbers: '"numero" must be a number  ',
  fieldsIsBlank: 'Attributes are missing',
  emailIsNotValid: '"email" must be a valid email',
};

const validateFields = (req, _res, next) => {
  const { nome, email, telefone, rua, numero, cidade, estado, cep } = req.body;
  const fields = [nome, email, telefone, rua, numero, cidade, estado, cep];
  if (!verifyFieldsIsNotBlank(fields)) {
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

const validateEmail = (req, _res, next) => {
  const { email } = req.body;
  if (!(verifyFormatEmail(email))) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.emailIsNotValid });
  }
  next();
};

module.exports = { validateFields, validateDataType, validateEmail };