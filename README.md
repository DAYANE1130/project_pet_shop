# Project Pet Shop

## Descrição

Este projeto Back-end é uma API RESTful desenvolvida com Node.js e Express. A API permite o cadastro de donos e pets, autenticação de usuários e operações CRUD em um banco de dados MySQL.

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL - Banco de dados
- JWT (JSON Web Token) - para autenticação e autorizar o acesso do usuário a rotas específicas.
- Mocha, Chai e Sinon - para testes.
- Eslint - para linting do código.
- Swagger - para documentação da API.

## Como Instalar e Rodar o Projeto

Clone o repositório do projeto do GitHub:

```bash ```
git clone https://github.com/DAYANE1130/project-pet-shop.git

### Navegação e Instalação das Dependências

Após clonar o repositório, navegue até o diretório do projeto e instale as dependências necessárias:

cd project-pet-shop npm install


### Configuração do Banco de Dados

Configure o arquivo `.env` com as informações do seu banco de dados MySQL. Aqui está um exemplo de configuração:

TZ=UTC PORT=3333 DB_CONNECTION=mysql DB_HOST=127.0.0.1 DB_PORT=3306 DB_USER=seu-usuario DB_PASSWORD=sua-senha DB_DATABASE=pet_shop


### Migrações e Inicialização do Servidor

Execute as migrações para criar a estrutura do banco de dados:

npx sequelize-cli db:migrate


Em seguida, inicie o servidor:

npm start


O projeto agora estará rodando e pronto para ser acessado em `http://localhost:3333`.

## Autenticação

Para autenticar um usuário na API, faça uma solicitação POST para a rota `/login` com o seguinte corpo:

json { "email": "rafael@gmail.com", "password": "abd_123" }


Se a autenticação for bem-sucedida, a API retornará um token JWT no seguinte formato:

json { "type": "bearer", "token": "iOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc5LCJpYXQiOjE3MTI2MTQ1MTF9.SqXgJPZx-WFIppHOZNuOvbYZi6MiwHzn7rWmg" }


## Autorização

Para acessar as rotas protegidas da API (como as rotas de donos e pets), você precisará incluir o token JWT em suas solicitações. Adicione um cabeçalho com "Authorization" como a chave e "Bearer {token}" como o valor, onde `{token}` é o token que você recebeu da rota de login.

## Rotas

### Usuários (Não exigem envio de token)

- **POST /user**: Cadastro de usuário do sistema.
- **POST /login**: Login com JWT de usuário cadastrado.

### Donos (Todas as rotas exigem envio de token)

- **GET /donos**: Listar todos os donos cadastrados.
- **GET /dono/:id**: Detalhar um dono.
- **POST /dono**: Adicionar um dono.
- **PATCH /dono/:id**: Editar um dono.
- **DELETE /dono/:id**: Excluir um dono.

### Pets (Todas as rotas exigem envio de token)

- **GET /pets**: Listar todos os pets cadastrados.
- **GET /pet/:id**: Detalhar um pet.
- **POST /pet**: Criar um pet.
- **PATCH /pet/:id**: Editar um pet.
- **DELETE /pet/:id**: Excluir um pet.

## Documentação

A documentação da API foi feita com Swagger e está acessível através da rota `/api-docs`.

