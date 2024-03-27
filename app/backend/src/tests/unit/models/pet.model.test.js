/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-env mocha */
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const petsModels = require('../../../models/petsModels');
const petMocks = require('./mocks/pet.model.mock');

afterEach(function () {
  sinon.restore();
});

describe('Testa função "create" de Pets na camada model', function () {
  before(function () {
    sinon.stub(connection, 'execute').resolves(petMocks.createPet);
  });

  it('Deve retornar o objeto correto ao criar um novo pet', async function () {
    const response = await petsModels.create(petMocks.dataCreatePet);
    expect(response).to.deep.equal(petMocks.returnCreatePet);
  });
});

describe('Testa função "getAll" de Pets na camada model', function () {
  before(function () {
    sinon.stub(connection, 'execute').resolves([petMocks.petsList]);// literamente oque espera um array de objetos
  });

  it('Deve retornar uma lista de todos os pets quando chamada', async function () {
    const response = await petsModels.getAll();
    expect(response).to.equal(petMocks.petsList);
  });
});

describe('Testa função "getById" de Pets na camada model', function () {
  before(function () {
    sinon.stub(connection, 'execute').resolves([[petMocks.petId]]);// literamente oque espera um array de objetos
  });

  it('Deve retornar o pet correto quando chamada com um id específico', async function () {
    const response = await petsModels.getById(3);
    expect(response).to.equal(petMocks.petId);
  });
});

describe('Testa função "update" de Pets na camada model', function () {
  before(function () {
    sinon.stub(connection, 'execute').resolves(petMocks.returnUpdatedPet);
  });

  it('Deve atualizar corretamente os dados de um pet quando chamada com um id e dados atualizados',
    async function () {
      const response = await petsModels.update(4, petMocks.keysPetUpdated);
      expect(response).to.deep.equal(petMocks.petUpdated);
    });
});

describe('Testa função "remove" de Pets na camada model', function () {
  before(function () {
    sinon.stub(connection, 'execute').resolves([petMocks.petDeleted]);
  });

  it('Deve remover corretamente um pet quando chamada com um id específico', async function () {
    const response = await petsModels.remove(4);
    expect(response).to.equal(petMocks.petDeleted);
  });
});