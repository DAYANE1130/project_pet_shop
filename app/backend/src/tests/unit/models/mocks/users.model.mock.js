const responseDbCreateUsers = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 7,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
  },
  undefined,
];

const [{ insertId }] = responseDbCreateUsers;

const dataCreateUsers = {
  first_name: 'Lua',
  last_name: 'Segundo',
  email: 'primeiraVezNaTvBrasileira@yahhogoo.br',
  password: 'Senha*46',
};

const returnCreateUsers = { id: insertId, ...dataCreateUsers };

const reqValidateFields = { 
  body: {
    first_name: "Joana", 
    last_name: "",
    email:"joana@yahoo.com.br",
    password:""
  } 
};

const usersMocks = {
  responseDbCreateUsers,
  dataCreateUsers,
  returnCreateUsers,
  reqValidateFields

};

module.exports = usersMocks;