const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, _req, res, _next) => {
  const { status, message } = err;
  switch (status) {
    case 'NOTFOUND': res.status(StatusCodes.NOT_FOUND).json({ message });
    break;
    default: res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
  }
};

module.exports = { errorHandler };