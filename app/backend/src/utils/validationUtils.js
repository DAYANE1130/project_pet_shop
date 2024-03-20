const verifyFormatEmail = (email) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

const verifyPasswordStrength = (password) => {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])/;
  if (passwordPattern.test(password) === false) return false;
  return true;
};

const verifyDataIsString = (data) => {
  const verifyFieldsString = data.every((field) => typeof field === 'string');
  return verifyFieldsString;
};

const verifyDataIsNumber = (data) => {
  const verifyFieldsNumbers = data.every((field) => typeof field === 'number');
  return verifyFieldsNumbers;
};

const verifyFieldsIsNotBlank = (data) => {
  const fields = data.every((field) => field);
  return fields;
};

module.exports = {
  verifyFormatEmail,
  verifyPasswordStrength,
  verifyDataIsString,
  verifyDataIsNumber,
  verifyFieldsIsNotBlank,
};