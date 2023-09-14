const { StatusCodes } = require('http-status-codes');
const {
  verifyFieldsIsNotBlank,
  verifyDataIsString,
  verifyFormatEmail,
  verifyPasswordStrength } = require('../utils');

const passwordRule = 'Password must have uppercase and uppercase letters,numbers between 0 and 9';
const symbolsRule = 'and any of the special characters :@!#$%^&*';

const errors = {
  fieldsIsBlank: 'Attributes are missing',
  fieldsIsNotStrings: 'fields  must be a strings',
  emailIsNotValid: '"email" must be a valid email',
  passwordIsNotValid: '"password" length must be at least 6 characters long',
  weakPassword: `${passwordRule} ${symbolsRule}`,
};

const validateFields = (req, _res, next) => {
  const { first_name: firstName, last_name: lastName, email, password } = req.body;
  const fields = [firstName, lastName, email, password];
  if (!verifyFieldsIsNotBlank(fields)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsBlank });
  }
  next();
};

const validateDataType = (req, _res, next) => {
  const { first_name: firstName, last_name: lastName } = req.body;
  const fieldsStrings = [firstName, lastName];
  if (!verifyDataIsString(fieldsStrings)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.fieldsIsNotStrings });
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

const validatePassword = (req, _res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.passwordIsNotValid });
  }
  if (!verifyPasswordStrength(password)) {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.weakPassword });
  }
  next();
};

module.exports = { validateFields, validateDataType, validateEmail, validatePassword };