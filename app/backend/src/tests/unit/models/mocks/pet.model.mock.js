const createPet = [
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
const [{ insertId }] = createPet;

const dataCreatePet = {
  dono_id: 1,
  tipo: 'aaa',
  nome: 'Lua',
  idade: 77,
  raca: 'Siames',
};
const returnCreatePet = { insertId, ...dataCreatePet };

const petsList = [
  {
    id: 1,
    dono_id: 1,
    tipo: 'Cachorro',
    nome: 'Fido',
    idade: 2,
    raca: 'Golden Retriever',
  },
  {
    id: 2,
    dono_id: 2,
    tipo: 'Gato',
    nome: 'Whiskers',
    idade: 1,
    raca: 'Persian',
  },
  {
    id: 3,
    dono_id: 3,
    tipo: 'Cachorro',
    nome: 'Luna',
    idade: 4,
    raca: 'Poodle',
  },
];

const petId = {
  id: 3,
  dono_id: 3,
  tipo: 'Cachorro',
  nome: 'Luna',
  idade: 4,
  raca: 'Poodle',
};

const petDeleted = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 0,
};

const keysPetUpdated = {
  keys: ['dono_id=?', 'nome=?', 'idade=?', 'raca=?'],
  values: [1, 'Luana', 5, 'Siames'],
};

const returnUpdatedPet = [
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
const [{ affectedRows }] = returnUpdatedPet;

const petUpdated = { affectedRows, updatedData: keysPetUpdated.values };

const petMocks = {  
  createPet,
  dataCreatePet,
  returnCreatePet,
  petsList,
  petId,
  keysPetUpdated,
  petUpdated,
  returnUpdatedPet,
  affectedRows,
  petDeleted,
};

module.exports = petMocks;