/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-env mocha */
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const loginModels = require('../../../models/loginModels');
const loginMocks = require('./mocks/login.model.mock');

let stubExecute;

afterEach(function () {
   sinon.restore();
});

describe('Testa função "loginUser" de Login na camada model', function () {
   before(function () {
     stubExecute =  sinon.stub(connection, 'execute');
   });

   it('Deve retornar o um objeto com os dados do usuario que fez o login', async function () {
      stubExecute.resolves([[loginMocks.mockLoginResponse]])
      const response = await loginModels.loginUser(loginMocks.mockLoginCredentials.email);
      expect(response).to.deep.equal(loginMocks.mockLoginResponse);
   });

   it('Deve retornar "undefined" caso o usuario com o e-mail informado não exista no banco de dados', async function () {
      stubExecute.resolves([[]])
      const response = await loginModels.loginUser(loginMocks.mockErrorLoginCredentials.email);
      expect(response).to.deep.equal(undefined);
   });

   it('Deve chamar a função execute com os argumentos corretos', async function () {
      const { email } = loginMocks.mockLoginCredentials;
      const query = 'SELECT * FROM pet_shop.users WHERE email=?'
      await loginModels.loginUser(email);
      expect(stubExecute.calledWith(query, [email])).to.be.true;
   });

});

