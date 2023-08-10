const { StatusCodes } = require('http-status-codes');

const errors = {
  firstNameOrLastNameIsNotValid: '"firs_name" and "last_name" must be a string',
  emailIsNotValid: '"email" must be a valid email',
  passwordIsNotValid: '"password" length must be at least 6 characters long',
};

// VAI SER ESSE STATUS PARA TODO MUNDO?
const validateFirstLastName = (req, _res, next) => {
  const { first_name: firstName, last_name: lastName } = req.body;
  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.firstNameOrLastNameIsNotValid });
  }
  next();
};

const verifyFormatEmail = (email) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
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
  next();
};

module.exports = { validateFirstLastName, validateEmail, validatePassword };