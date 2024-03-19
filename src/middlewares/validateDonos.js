const { StatusCodes } = require('http-status-codes');
const {
  verifyDataIsString, 
  verifyDataIsNumber, 
  verifyFieldsIsNotBlank, 
  verifyFormatEmail } = require('../utils/validationUtils');

const errors = {
  fieldsIsNotStrings: 'fields  must be a strings',
  fieldsIsNotNumbers: '"numero" must be a number  ',
  fieldsIsBlank: 'Attributes are missing',
  emailIsNotValid: '"email" must be a valid email',
  fieldsKeysIsBlank: 'Attribute(s) keys are missing',
  fieldsValuesIsBlank: 'Attribute(s) values are missing',
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

const validateFieldsPatch = (req, _res, next) => {
  const colunsOwnerPetTable = [
    'nome', 'email', 'telefone', 'rua', 'numero', 'cidade', 'estado', 'cep'];
  const keysFields = Object.keys(req.body);
  const valuesFields = Object.values(req.body);
  const verifyExistFieldKey = keysFields.every((key) => colunsOwnerPetTable.includes(key));

  if (!verifyExistFieldKey) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsKeysIsBlank });
  }
  if (!verifyFieldsIsNotBlank(valuesFields)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsValuesIsBlank });
  }
  next();
};

const validateDataTypePatch = (req, _res, next) => {
  const { nome, email, telefone, rua, numero, cidade, estado, cep } = req.body;
  const fieldsStrings = [nome, email, telefone, rua, cidade, estado, cep];
  const fieldsNumbers = [numero];
  const valuesRequiredStrings = fieldsStrings.filter((item) => item !== undefined);
  const valuesRequiredNumbers = fieldsNumbers.filter((item) => item !== undefined);

  if (!verifyDataIsString(valuesRequiredStrings)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsNotStrings });
  }
  if (!verifyDataIsNumber(valuesRequiredNumbers)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsNotNumbers });
  }
  next();
};

module.exports = {
  validateFields,
  validateDataType,
  validateEmail,
  validateFieldsPatch,
  validateDataTypePatch,
};