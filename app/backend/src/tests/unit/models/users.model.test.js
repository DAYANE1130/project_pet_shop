/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-env mocha */
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const usersModels = require('../../../models/usersModels');
const usersMocks = require('./mocks/users.model.mock');
const validateUsers = require('../../../middlewares/validateUsers')
const { StatusCodes } = require('http-status-codes');

afterEach(function () {
   sinon.restore();
});

describe('Testa função "create" de Users na camada model', function () {
   before(function () {
      sinon.stub(connection, 'execute').resolves(usersMocks.responseDbCreateUsers);
   });

   it('Deve retornar o objeto correto ao criar um novo usuário', async function () {
      const response = await usersModels.create(usersMocks.dataCreateUsers);
      expect(response).to.deep.equal(usersMocks.returnCreateUsers);
   });
});

describe.only('Testa middleware "validateFields"', function () {
   it('Deve retornar um erro 400 se os campos necessários não forem fornecidos', async function () {
      const req = usersMocks.reqValidateFields;
      
      const next = sinon.stub();

      await validateUsers.validateFields(req, {}, next);

      expect(next.calledWith({ status: StatusCodes.BAD_REQUEST, message:'Attributes are missing' })).to.be.true;
   });
});
