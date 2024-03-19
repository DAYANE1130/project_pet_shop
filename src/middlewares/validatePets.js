const { StatusCodes } = require('http-status-codes');
const {
  verifyDataIsString,
  verifyFieldsIsNotBlank,
  verifyDataIsNumber,
} = require('../utils/validationUtils');

const errors = {
  fieldsKeysIsBlank: 'Attribute(s) keys are missing',
  fieldsValuesIsBlank: 'Attribute(s) values are missing',
  fieldsIsNotStrings: 'fields "tipo", "nome" or "raca" must be a strings',
  fieldsIsNotNumbers: '"dono_id" and/or "idade" must be a number  ',
};

const validateFieldsPost = (req, _res, next) => {
  const { dono_id: donoId, tipo, nome, idade, raca } = req.body;

  const colunsPetTable = ['dono_id', 'tipo', 'nome', 'idade', 'raca'];
  const valuesFields = [donoId, tipo, nome, idade, raca];

  const verifyExistFieldKey = colunsPetTable.every((key) => Object.keys(req.body).includes(key));

  if (!verifyExistFieldKey) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsKeysIsBlank });
  }

  if (!verifyFieldsIsNotBlank(valuesFields)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsValuesIsBlank });
  }
  next();
};

const validateDataType = (req, _res, next) => {
  const { tipo, nome, raca, dono_id: donoId, idade } = req.body;
  const fieldsStrings = [tipo, nome, raca];
  const fieldsNumbers = [donoId, idade];
  if (!verifyDataIsString(fieldsStrings)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsNotStrings });
  }
  if (!verifyDataIsNumber(fieldsNumbers)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsNotNumbers });
  }
  next();
};

const validateFieldsPatch = (req, _res, next) => {
  const colunsPetTable = ['dono_id', 'tipo', 'nome', 'idade', 'raca'];
  const keysFields = Object.keys(req.body);
  const valuesFields = Object.values(req.body);
  const verifyExistFieldKey = keysFields.every((key) => colunsPetTable.includes(key));

  if (!verifyExistFieldKey) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsKeysIsBlank });
  }
  if (!verifyFieldsIsNotBlank(valuesFields)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsValuesIsBlank });
  }
  next();
};

const validateDataTypePatch = (req, _res, next) => {
  const { tipo, nome, raca, dono_id: donoId, idade } = req.body;
  const fieldsStrings = [tipo, nome, raca];
  const fieldsNumbers = [donoId, idade];
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
  validateFieldsPost,
  validateFieldsPatch,
  validateDataType,
  validateDataTypePatch,
};