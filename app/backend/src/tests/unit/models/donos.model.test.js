/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-env mocha */
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const donosModels = require('../../../models/donosModels');
const donosMocks = require('./mocks/donos.model.mock');

afterEach(function () {
 sinon.restore();
});

describe('Testa função "create" de Donos na camada model', function () {
 before(function () {
    sinon.stub(connection, 'execute').resolves(donosMocks.createDono);
 });

 it('Deve retornar o objeto correto ao criar um novo donos', async function () {
    const response = await donosModels.create(donosMocks.dataCreateDono);
    expect(response).to.deep.equal(donosMocks.returnCreateDono);
 });
});

describe('Testa função "getByEmail" de Donos na camada model', function () {
   before(function () {
      sinon.stub(connection, 'execute').resolves(donosMocks.responseDbGetByEmail);
   });
  
   it('Deve retornar o objeto correto ao criar um novo donos', async function () {
      const response = await donosModels.getByEmail(donosMocks.email);
      expect(response).to.deep.equal(donosMocks.returnGetByEmail);
   });
  });

describe('Testa função "getAll" de Donos na camada model', function () {
 before(function () {
    sinon.stub(connection, 'execute').resolves([donosMocks.donosList]);
 });

 it('Deve retornar uma lista de todos os donos quando chamada', async function () {
    const response = await donosModels.getAll();
    expect(response).to.equal(donosMocks.donosList);
 });
});

describe('Testa função "getById" de Donos na camada model', function () {
 before(function () {
    sinon.stub(connection, 'execute').resolves([donosMocks.donoId]);
 });

 it('Deve retornar o donos correto quando chamada com um id específico', async function () {
    const response = await donosModels.getById(3);
    expect(response).to.equal(donosMocks.donoId);
 });
});

describe('Testa função "update" de Donos na camada model', function () {
 before(function () {
    sinon.stub(connection, 'execute').resolves(donosMocks.returnUpdatedDono);
 });

 it('Deve atualizar corretamente os dados de um donos quando chamada com um id e dados atualizados',
    async function () {
      const response = await donosModels.update(4, donosMocks.keysDonosUpdated);
      expect(response).to.deep.equal(donosMocks.donosUpdated);
    });
});

describe('Testa função "remove" de Donos na camada model', function () {
 before(function () {
    sinon.stub(connection, 'execute').resolves([donosMocks.donoDeleted]);
 });

 it('Deve remover corretamente um donos quando chamada com um id específico', async function () {
    const response = await donosModels.remove(4);
    expect(response).to.equal(donosMocks.donoDeleted);
 });
});