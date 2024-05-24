# Project Pet Shop

## Descrição

Este projeto Back-end é uma API RESTful desenvolvida com Node.js e Express. A API permite o cadastro de donos e pets, autenticação de usuários, login e operações CRUD em um banco de dados MySQL para um pet shop.

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL - Banco de dados
- JWT (JSON Web Token) - para autenticação e autorizar o acesso do usuário a rotas específicas.
- Mocha, Chai e Sinon - para testes.
- Eslint - para linting do código.
- Postman - para documentação da API
- Swagger - para documentação da API.

## Como Instalar e Rodar o Projeto

Clone o repositório do projeto do GitHub:

```bash 
git clone https://github.com/DAYANE1130/project_pet_shop
```

### Navegação e Instalação das Dependências

Após clonar o repositório, navegue até o diretório do projeto e instale as dependências necessárias:


```bash 
cd project-pet-shop 
npm install
```

### Configuração do Banco de Dados

Entre na pasta 'backend' e configure o arquivo `.env` com as informações do seu banco de dados MySQL. Aqui está um exemplo de configuração:

```bash 
PORT=3000
MYSQL_HOST=localhost
MYSQL_USER=seuUsuario
MYSQL_PASSWORD= suaSenha
JWT_SECRET=seuSegredo
```



Em seguida, inicie o servidor backend :


```bash 
npm run dev
```



## Autorização

Para acessar as rotas protegidas da API (como as rotas 'post' de donos e pets), você precisará incluir o token JWT em suas solicitações. Adicione um cabeçalho com "Authorization" como a chave e "Bearer {token}" como o valor, onde `{token}` é o token que você recebeu da rota de login.

## Rotas

### Usuários (Não exigem envio de token)

- **POST /user**: Cadastro de usuário do sistema.
- **POST /login**: Caso o login seja realizado com sucesso será gerado um token JWT para o usuário cadastrado.

### Donos

- **GET /donos**: Listar todos os donos cadastrados.
- **GET /dono/:id**: Detalhar um dono.
- **POST /dono**: Adicionar um dono. (exige token)
- **PATCH /dono/:id**: Editar um dono.
- **DELETE /dono/:id**: Excluir um dono.

### Pets

- **GET /pets**: Listar todos os pets cadastrados.
- **GET /pet/:id**: Detalhar um pet.
- **POST /pet**: Criar um pet.(exige token)
- **PATCH /pet/:id**: Editar um pet.
- **DELETE /pet/:id**: Excluir um pet.

## Documentação

A documentação da API atualizada esá disponível no endereço: https://documenter.getpostman.com/view/31041446/2sA3BgAFcz

