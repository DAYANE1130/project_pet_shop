const createDono = [
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

const [{ insertId }] = createDono;

const dataCreateDono = {
  nome: 'Joao bosco',
  email: 'joaob.silva@exampl.com',
  telefone: '11987654321',
  rua: 'Rua das Flores',
  numero: 123,
  cidade: 'São Paulo',
  estado: 'SP',
  cep: '01000-000',
};

const returnCreateDono = { id: insertId, ...dataCreateDono };

const returnGetByEmail = [{
  id: 14,
  nome: 'Joao bosco',
  email: 'JOANAb.silGgsva@examplseee.com',
  telefone: '11987654321',
  rua: 'Resplendor',
  numero: 123,
  cidade: 'MG',
  estado: 'SP',
  cep: '01000-000',
}];

const [{ email }] = returnGetByEmail;

const responseDbGetByEmail = [[...returnGetByEmail]];

const donosList = [
  {
    id: '1',
    nome: 'Maria Silva',
    email: 'maria@example.com',
    telefone: '9876543210',
    address: {
      rua: 'Rua das Flores',
      numero: 123,
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '12345-678',
    },
  },
  {
    id: '2',
    nome: 'João Santos',
    email: 'joao@example.com',
    telefone: '9876543211',
    address: {
      rua: 'Avenida Central',
      numero: 456,
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      cep: '98765-432',
    },
  },
  {
    id: '3',
    nome: 'Pedro Oliveira',
    email: 'pedro@example.com',
    telefone: '9876543212',
    address: {
      rua: 'Rua Principal',
      numero: 789,
      cidade: 'Belo Horizonte',
      estado: 'MG',
      cep: '54321-876',
    },
  },
  {
    id: '4',
    nome: 'Joao bosco',
    email: 'joaob.silva@exampl.com',
    telefone: '11987654321',
    address: {
      rua: 'Rua das Flores',
      numero: 123,
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01000-000',
    },
  },
];

const donoId = [
  {
    id: '1',
    nome: 'Maria Silva',
    email: 'maria@example.com',
    telefone: '9876543210',
    address: {
      rua: 'Rua das Flores',
      numero: '123',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '12345-678',
    },
  },
];

const keysDonosUpdated = {
  keys: ['email=?', 'telefone=?', 'rua=?', 'numero=?', 'cidade=?'],
  values: ['joao.silva@gmail.br', '777877', 'aaa', 99, 'São Paulo'],
};

const returnUpdatedDono = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 0  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
  },
  undefined,
];
const [{ affectedRows }] = returnUpdatedDono;

const donosUpdated = { affectedRows, updatedData: keysDonosUpdated.values };

const donoDeleted = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 0,
};

const donosMocks = {
  createDono,
  dataCreateDono,
  returnCreateDono,
  responseDbGetByEmail,
  email,
  returnGetByEmail,
  donosList,
  donoId,
  keysDonosUpdated,
  donosUpdated,
  returnUpdatedDono,
  affectedRows,
  donoDeleted,
};

module.exports = donosMocks;