const { StatusCodes } = require('http-status-codes');

const errors = {
donoIdOrIdadeIsNotValid: '"dono_id"  must be a number',
  tipoIsNotValid: '"tipo" must be a valid ',
  nomeIsNotValid: '"nome" must be a valid',
  idadeNotValid: '"idade" must be a number',
  racaNotValid: '"raca" must be a valid',
};

const validateDonoId = (req, _res, next) => {
  const { dono_id: donoId } = req.body;
  if (typeof donoId !== 'number') {
    return next({ status: StatusCodes.BAD_REQUEST, message: errors.firstNameOrLastNameIsNotValid });
  }
  next();
};

module.exports = { validateDonoId };