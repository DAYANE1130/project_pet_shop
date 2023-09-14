const { StatusCodes } = require('http-status-codes');
const { verifyDataIsString, verifyFieldsIsNotBlank, verifyDataIsNumber } = require('../utils');

const errors = {
  fieldsIsNotStrings: 'fields  must be a strings',
  fieldsIsNotNumbers: '"dono_id" and "idade" must be a number  ',
  fieldsIsBlank: 'Attributes are missing',
  updateFieldsIsBlank: ' Update Attributes  are missing',
};

const validateFields = (req, _res, next) => {
  const { dono_id: donoId, tipo, nome, idade, raca } = req.body;
 
  const fields = [donoId, tipo, nome, idade, raca];
  const values = [...Object.values(req.body)];

  if (!verifyFieldsIsNotBlank(fields)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsBlank });
  }
  
  if (!verifyFieldsIsNotBlank(values)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.updateFieldsIsBlank });
  }
  next();
};
 // assim funciona
const validateFieldsUpdate = (req, _res, next) => {
  const values = [...Object.values(req.body)];

 // console.log(values)

  if (!verifyFieldsIsNotBlank(values)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsBlank });
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

module.exports = { validateFields, validateFieldsUpdate, validateDataType };