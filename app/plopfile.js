/* eslint-disable func-names */
module.exports = function (plop) {
  // Gerador para testes de model
  plop.setGenerator('modelTest', {
     description: 'Gera um arquivo de teste para um modelo',
     prompts: [{
       type: 'input',
       name: 'modelName',
       message: 'Nome do modelo para o qual o teste será criado',
     }],
     actions: [{
       type: 'add',
       path: 'backend/src/tests/unit/models/{{modelName}}.model.test.js',
       templateFile:'backend/plop-templates/models/model.test.hbs',
     }],
  });
};